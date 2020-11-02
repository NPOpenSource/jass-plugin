#!/usr/bin/python
# -*- coding: UTF-8 -*-

functionList=[]
constantList=[]
variableList=[]

#pragma mark  -
def replaceKeyValue(template,key,value):
    return template.replace(key,value)
#pragma mark  - parseCmd
parseCmdList=[]
def installParseCmd(cmd):
    global parseCmdList
    parseCmdList.append(cmd)

def parseFunctionParamers(index,list,callBackParamers):
    key =""
    while list[index] != "returns":
        if list[index] == "nothing":
            index=index+1
            break;
        if (len(key) == 0):
            key=list[index]
        else:
            callBackParamers[key]=replaceKeyValue(list[index],",","")
            key=""
        index=index+1
    return index
    
def parseFunction(list,line):
    global functionList
    if len(list) >= 2:
        if(list[0]=="function" and list[2]=="takes"):
            name =list[1].replace("\t","")
            mapParamers={}
            currentIndex=parseFunctionParamers(3,list,mapParamers)
            returnValue=list[currentIndex+1]
            functionMap={"name":name,"paramers":mapParamers,"return":returnValue}
            functionList.append(functionMap)
            return True
    return False
            
installParseCmd(parseFunction)

parseSignal=False

def parseConstant(list,line):
    global constantList
    global parseSignal
    if(len(list)==1):
        if list[0]=="globals":
            parseSignal=True
            return False
    if(len(list)==1):
        if list[0]=="endglobals":
            parseSignal=False
            return False
    if parseSignal==True:
        if len(list)>=4:
            if(list[3]=="="):
                name =list[2].replace("\t","")
                type =list[1].replace("\t","")
                value=list[4].replace("\t","")
                suff=list[0].replace("\t","")
                mapParamers={"name":name,"type":type,"value":value,"suff":suff}
                constantList.append(mapParamers)
                return True
    return False
    
installParseCmd(parseConstant)

def parseVariable(list,line):
    global variableList
    global parseSignal
    if(len(list)==1):
        if list[0]=="globals":
            parseSignal=True
            return False
    if(len(list)==1):
        if list[0]=="endglobals":
            parseSignal=False
            return False
    if parseSignal==True:
        if len(list)>=4:
            if (list[2]=="="):
                 name =list[1].replace("\t","")
                 type =list[0].replace("\t","")
                 value=list[3].replace("\t","")
                 mapParamers={"name":name,"type":type,"value":value}
                 variableList.append(mapParamers)
                 return True
        if(len(list)>0):
            if (list[0].startswith("//")):
                return False
            if len(list)>=3:
                name=list[2].replace("\t","")
                type =list[0].replace("\t","")+" "+list[1].replace("\t","")
                mapParamers={"name":name,"type":type}
                variableList.append(mapParamers)
                return True
    return False
    
installParseCmd(parseVariable)


#pragma mark  -  readfile
def readfile(pathname):
    content=""
    with open(pathname,'r+') as load_f:
        for line in load_f.readlines():
            stripLine=line.strip()
            lists=stripLine.split(' ')
            list = [i for i in lists if i != '']
            for cmd in parseCmdList:
                if(cmd(list,line)):
                    break
                
                
readfile("blizzard.j")

#print(functionList)
#print(enumList)

#pragma mark  - public


def getSnippetTemplate():
    return'''        "value1": {
           "prefix": "value1",
           "body": "value2",
           "description": "value3",
           "scope": "source.vjass"
       },\n'''

template=getSnippetTemplate()
def getSnippetItem(value1,value2,value3):
    global template
    text=replaceKeyValue(template,"value1",value1);
    text=replaceKeyValue(text,"value2",value2);
    text=replaceKeyValue(text,"value3",value3);
    return text
#pragma mark  - writefile

writeCmdList=[]

def installWriteCmd(cmd,fileName):
    global writeCmdList
    writeCmdList.append({'func':cmd,'fileName':fileName})
 
def writeConstant(f):
    global constantList
    temp=""
    for item in constantList:
        name=item["name"]
        type=item["type"]
        value=item["value"]
        value1="cn"+name
        value2="constant "+type+" "+name+" = "+value
        temp=temp+getSnippetItem(value1,name,value2)
    return temp
    
installWriteCmd(writeConstant,"vj_snippets_constant_bj")

def writeVariable(f):
    global variableList
    temp=""
    for item in variableList:
        name=item["name"]
        type=item["type"]
        value = ""
        if item.has_key("value"):
            value=item["value"]
        value1="vr"+name
        value2=type+" "+name
        if value != "":
            value2 = value2+" = "+value
        temp=temp+getSnippetItem(value1,name,value2)
    return temp
    
installWriteCmd(writeVariable,"vj_snippets_variable_bj")



def getFunSnippetsBody(item):
    name=item["name"]
    paramers=item["paramers"]
    functionName=name+"("
    if (len(paramers) == 0):
        functionName=functionName+"${0:nothing},"
    index = 0;
    for item in paramers:
        functionName=functionName+"${"+str(index)+":"+item+" "+paramers[item]+"},"
        index=index+1
    functionName=functionName[:-1]
    functionName=functionName+")"
    return functionName

def writeFun(f):
    global functionList
    temp=""
    for item in functionList:
        print(item)
        name=item["name"]
        paramers=item["paramers"]
        value1="fn"+name
        value2=getFunSnippetsBody(item)
        temp=temp+getSnippetItem(value1,value2,value1)
    return temp

installWriteCmd(writeFun,"vj_snippets_function_bj")


#pragma mark  - writeFile
def writeFile():
    for item in writeCmdList:
        fileName= item['fileName']
        funcName=item['func']
        f = open(fileName+".json", "w+")
        f.write("{\n")
        temp=funcName(f)
        temp=temp[:-2]
        f.write(temp)
        f.write("\n}\n")
        f.close()
        
writeFile()
