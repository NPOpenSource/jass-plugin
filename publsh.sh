#!/bin/bash

versionfile="version.txt"
version="jass-plugin-0.0.1.vsix"
readVersion(){
    while read line
        do
        version=$line
    done < $versionfile
}
readVersion
echo $version

vsce package

list=`ls *.vsix`
lastVersion=""
for element in $list
do
    lastVersion=$element
done

if [ "$lastVersion" == "$version" ];then
    echo "请修改package.json的版本号"
    exit 1
fi

vsce publish
echo $lastVersion > $versionfile


