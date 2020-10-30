#!/usr/bin/python
# -*- coding: UTF-8 -*-

functionList=[]
variableList=[]

#pragma mark  -
def replaceKeyValue(template,key,value):
    return template.replace(key,value)
#pragma mark  - parseCmd
parseCmdList=[]
def installParseCmd(cmd):
    global parseCmdList
    parseCmdList.append(cmd)

def parseVariable(list,line):
    global variableList
    if len(list)>1:
        if list[0] == "type":
            name=list[1].replace("\t","")
            des=list[0]+" "+name+" "+list[2]+" "+list[3]
            variableList.append({"name":name,"desc":des})

installParseCmd(parseVariable)


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
    if len(list) >= 3:
        if(list[0]=="constant" and list[1]=="native" and list[3]=="takes"):
            name =list[2].replace("\t","")
            mapParamers={}
            currentIndex=parseFunctionParamers(4,list,mapParamers)
            returnValue=list[currentIndex+1]
            functionMap={"name":name,"paramers":mapParamers,"return":returnValue}
            functionList.append(functionMap)
            return True
        if(list[0]=="native" and list[2]=="takes"):
            name =list[1].replace("\t","")
            mapParamers={}
            currentIndex=parseFunctionParamers(3,list,mapParamers)
            returnValue=list[currentIndex+1]
            functionMap={"name":name,"paramers":mapParamers,"return":returnValue}
            functionList.append(functionMap)
            return True
    return False
            
installParseCmd(parseFunction)

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
                
                
readfile("common.j")

#print(functionList)
print(variableList)

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
 

 
def writeVariable(f):
    global variableList
    temp=""
    for item in variableList:
        print(item)
        name=item["name"]
        des=item["desc"]
        value1="vr"+name
        value2=des
        temp=temp+getSnippetItem(value1,value1,value2)
    return temp
    
installWriteCmd(writeVariable,"vj_snippets_variable_cj")


def getFunSnippetsBody(item):
    name=item["name"]
    paramers=item["paramers"]
    functionName=name+"("
    if (len(paramers) == 0):
        functionName=functionName+"${0:nothing},"
##    ${1:function_name}
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
        name=item["name"]
        paramers=item["paramers"]
        value1="fn"+name
        value2=getFunSnippetsBody(item)
        temp=temp+getSnippetItem(value1,value2,value1)
    return temp

installWriteCmd(writeFun,"vj_snippets_function_cj")


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
