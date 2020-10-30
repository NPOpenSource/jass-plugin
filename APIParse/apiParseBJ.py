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

parseSignal=False

def parseEnum(list,line):
    global enumList
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
                enumList.append(list[2].replace("\t",""))
                return True
            if (list[2]=="="):
                enumList.append(list[1].replace("\t",""))
                return True
        if(len(list)>0):
            if (list[0].startswith("//")):
                return False
            enumList.append(list[-1].replace("\t",""))
            return True
    return False
    
installParseCmd(parseEnum)

def parseFunction(list,line):
    global functionList
    if len(list) >= 2:
        if(list[0]=="function" and list[2]=="takes"):
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
                
                
readfile("blizzard.j")

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
    f.write("exports.bjvariableNames={\n")
    template=getVariableTemplate()
    for item in variableList:
        text=replaceKeyValue(template,"value1",item);
        f.write(text)
    f.write("}\n")

#installWriteCmd(writeVariable,"bjvariables")

def writeEnum(f):
    global enumList
    f.write("exports.bjenumNames={\n")
    template=getEnumTemplate()
    for item in enumList:
        text=replaceKeyValue(template,"value1",item);
        f.write(text)
    f.write("}\n")
    
installWriteCmd(writeEnum,"bjenums")

def writeFun(f):
    global functionList
    f.write("exports.bjfunctionNames={\n")
    template=getFunctionTemplate()
    for item in functionList:
        text=replaceKeyValue(template,"value1",item);
        f.write(text)
    f.write("}\n")

installWriteCmd(writeFun,"bjfunctions")


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
