const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
const utilHelper = {
    // funSuff: "fff",
    // conSuff: "ccc",
    // varSuff: "vvv",
    funSuff: "fn",
    conSuff: "cn",
    varSuff: "vr",

    getStat(path) {
        return new Promise((resolve, reject) => {
            fs.stat(path, (err, stats) => {
                if (err) {
                    resolve(false);
                } else {
                    resolve(stats);
                }
            })
        })
    },
    mkdir(dir) {
        return new Promise((resolve, reject) => {
            fs.mkdir(dir, err => {
                if (err) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            })
        })
    },

    async dirExists(dir) {
        let isExists = await this.getStat(dir);
        //如果该路径且不是文件，返回true
        if (isExists && isExists.isDirectory()) {
            return true;
        } else if (isExists) { //如果该路径存在但是文件，返回false
            return false;
        }
        //如果该路径不存在
        let tempDir = path.parse(dir).dir; //拿到上级路径
        //递归判断，如果上级目录也不存在，则会代码会在此处继续循环执行，直到目录存在
        let status = await this.dirExists(tempDir);
        let mkdirStatus;
        if (status) {
            mkdirStatus = await this.mkdir(dir);
        }
        return mkdirStatus;
    }

}

module.exports = utilHelper;