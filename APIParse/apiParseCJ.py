#!/usr/bin/python
# -*- coding: UTF-8 -*-

variableList=[]
enumList=[]
functionList=[]

#pragma mark  - parseCmd
parseCmdList=[]
def installParseCmd(cmd):
    global parseCmdList
    parseCmdList.append(cmd)

def parseVariable(list,line):
    global variableList
    if len(list)>1:
        if list[0] == "type":
            variableList.append(list[1].replace("\t",""))
            return True
    return False
    
installParseCmd(parseVariable)

def parseEnum(list,line):
    global enumList
    if len(list)>=4:
        if(list[0]=="constant" and list[3]=="="):
            enumList.append(list[2].replace("\t",""))
            return True
    return False
    
installParseCmd(parseEnum)

def parseFunction(list,line):
    global functionList
    if len(list) >= 3:
        if(list[0]=="constant" and list[1]=="native" and list[3]=="takes"):
            functionList.append(list[2].replace("\t",""))
            return True
        if(list[0]=="native" and list[2]=="takes"):
            functionList.append(list[1].replace("\t",""))
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

print(variableList)
print(functionList)

#pragma mark  - public
def getVariableTemplate():
    return'''   value1:{
        type:"variable"
    },\n'''

def getFunctionTemplate():
    return'''   value1:{
        type:"function"
    },\n'''

def getEnumTemplate():
    return'''   value1:{
        type:"enum"
    },\n'''


#pragma mark  -
def replaceKeyValue(template,key,value):
    return template.replace(key,value)

#pragma mark  -

def writeHead(f):
    f.write("const vscode = require('vscode');\n")
  
writeCmdList=[]

def installWriteCmd(cmd,fileName):
    global writeCmdList
    writeCmdList.append({'func':cmd,'fileName':fileName})

    
def writeVariable(f):
    global variableList
    f.write("exports.cjvariableNames={\n")
    template=getVariableTemplate()
    for item in variableList:
        text=replaceKeyValue(template,"value1",item);
        f.write(text)
    f.write("}\n")

installWriteCmd(writeVariable,"cjvariables")

def writeEnum(f):
    global enumList
    f.write("exports.cjenumNames={\n")
    template=getEnumTemplate()
    for item in enumList:
        text=replaceKeyValue(template,"value1",item);
        f.write(text)
    f.write("}\n")
    
installWriteCmd(writeEnum,"cjenums")

def writeFun(f):
    global functionList
    f.write("exports.cjfunctionNames={\n")
    template=getFunctionTemplate()
    for item in functionList:
        text=replaceKeyValue(template,"value1",item);
        f.write(text)
    f.write("}\n")

installWriteCmd(writeFun,"cjfunctions")


#pragma mark  - writeFile
def writeFile():
    for item in writeCmdList:
        fileName= item['fileName']
        funcName=item['func']
        f = open(fileName+".js", "w+")
        writeHead(f)
        funcName(f)
        f.close()
        
writeFile()
