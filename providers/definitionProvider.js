const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
var readline = require('readline');

const utils = require('../utils/utilHelper');
// @ts-ignore
const bjFunJson = require("../APIParse/vj_snippets_function_bj.json");
// @ts-ignore
const cjFunJson = require("../APIParse/vj_snippets_function_cj.json");
///自己生成文本
class definitionProvider {
    constructor() {
        let tempfuns = {};
        this.apiRootPath = vscode.workspace.rootPath + "/api";
        this.commonPath = this.apiRootPath + '/common.j';
        this.blizzardPath = this.apiRootPath + '/blizzard.j';

        (async() => {
            try {
                var res = await this.isFileExisted(this.commonPath);
                console.log(res);
            } catch (error) {
                ///创建目录和文件
                await utils.dirExists(this.apiRootPath);
                const bjjs = require("../APIParse/blizzard");
                fs.writeFile(this.commonPath, bjjs, function(error) {

                    console.log(error);
                });
            }

            try {
                var res = await this.isFileExisted(this.blizzardPath);
                console.log(res);
            } catch (error) {
                ///创建目录和文件
                console.log("创建文件");
                await utils.dirExists(this.apiRootPath);
                const cjjs = require("../APIParse/common");
                fs.writeFile(this.blizzardPath, cjjs, function(error) {
                    console.log(error);
                });
            }
            console.log("设置值");
            Object.assign(tempfuns, bjFunJson);
            Object.assign(tempfuns, cjFunJson);
            this.funs = tempfuns;
            this.commonLines = [];
            this.blizzardLines = [];
            this.read_file(this.commonPath, this.commonLines);
            this.read_file(this.blizzardPath, this.blizzardLines);
        })();
    }

    isFileExisted(pathName) {
        return new Promise(function(resolve, reject) {
            fs.access(pathName, (err) => {
                if (err) {
                    reject(err.message);
                } else {
                    resolve('existed');
                }
            })
        })
    }




    read_file(path, list) {
        var fRead = fs.createReadStream(path);
        var objReadline = readline.createInterface({
            input: fRead
        });
        objReadline.on('line', function(line) {
            list.push(line);
        });
        objReadline.on('close', function() {

        });
    }

    provideDefinition(document, position, options, token) {
        console.log(vscode.workspace.rootPath);
        // const fileName = document.fileName;
        // const workDir = path.dirname(fileName);
        // const line = document.lineAt(position);
        const range = document.getWordRangeAtPosition(position);
        const word = document.getText(range);
        let checkword = utils.funSuff + word;
        let item = this.funs[checkword];

        if (item != undefined) {
            const matchStr = ".* " + word + " .*takes.*returns"

            for (let index = 0; index < this.commonLines.length; index++) {
                const element = this.commonLines[index];
                let n = element.search(matchStr);
                if (n != -1) {
                    console.log(index);
                    return new vscode.Location(vscode.Uri.file(this.commonPath), new vscode.Position(index, 0));
                }
            }
            for (let index = 0; index < this.blizzardLines.length; index++) {
                const element = this.blizzardLines[index];
                let n = element.search(matchStr);
                if (n != -1) {
                    console.log(index);
                    return new vscode.Location(vscode.Uri.file(this.blizzardPath), new vscode.Position(index, 0));
                }
            }
            // this.
            return null;
        }
        console.log("nohave");

        return null;
    };
}

module.exports = definitionProvider;