#!/usr/bin/python
# -*- coding: UTF-8 -*-


def replaceKeyValue(template,key,value):
    return template.replace(key,value)

def getTemplate():
    return'''const {{value1}} = "\\
    {{value2}}";
module.exports = {{value1}};
'''

#pragma mark  -  readfile
tempList=[]
def readfile(pathname):
    global tempList
    with open(pathname,'r+') as load_f:
        for line in load_f.readlines():
           tempList.append(line)

def writeFile(pathname):
    global tempList
    text=replaceKeyValue(getTemplate(),"{{value1}}",pathname);
    tempContent=""
    for line in tempList:
        line=line.replace('\n', '').replace('\r', '') 
        line=line+"\\r\\n\\\n"
        line=replaceKeyValue(line,'"','\\"')
        tempContent=tempContent+line

    text=replaceKeyValue(text,"{{value2}}",tempContent);
    print(text)
    with open(pathname+'.js','w+') as f:
        f.write(text)                
                
readfile("blizzard.j")   
writeFile("blizzard")
readfile("common.j")
writeFile("common")