const { Linter } = require('eslint');
const vscode = require('vscode');
const utilHelper = require('../utils/utilHelper');
// @ts-ignore
const bjFunJson = require("../APIParse/vj_snippets_function_bj.json");
// @ts-ignore
const cjFunJson = require("../APIParse/vj_snippets_function_cj.json");
// @ts-ignore
const bjConstant = require("../APIParse/vj_snippets_constant_bj.json");
// @ts-ignore
const cjConstant = require("../APIParse/vj_snippets_constant_cj.json");
// @ts-ignore
const cjVariableType = require("../APIParse/vj_snippets_variableType_cj.json");
// @ts-ignore
const bjVariable = require("../APIParse/vj_snippets_variable_bj.json");


class hoverProvider {
    provideHover(document, position, token) {
        const line = document.lineAt(position);
        const lineText = line.text;
        const range = document.getWordRangeAtPosition(position);
        // const startLoc = range.start.character;
        const endLoc = range.end.character;
        const lineLenth = lineText.length;

        const word = document.getText(range);
        //函数只匹配 xxx(格式的
        // console.log(lineText);
        // console.log(word);
        var checklist = [];
        if (endLoc == lineLenth) {
            checklist.push({ "suff": utilHelper.conSuff, "value": bjConstant });
            checklist.push({ "suff": utilHelper.conSuff, "value": cjConstant });
            checklist.push({ "suff": utilHelper.varSuff, "value": bjVariable });
            checklist.push({ "suff": "", "value": cjVariableType });
        } else {

            const nextCha = lineText.substring(endLoc, endLoc + 1);
            if (nextCha == "(") {
                checklist.push({ "suff": utilHelper.funSuff, "value": bjFunJson });
                checklist.push({ "suff": utilHelper.funSuff, "value": cjFunJson });
            } else {
                checklist.push({ "suff": utilHelper.conSuff, "value": bjConstant });
                checklist.push({ "suff": utilHelper.conSuff, "value": cjConstant });
                checklist.push({ "suff": utilHelper.varSuff, "value": bjVariable });
                checklist.push({ "suff": "", "value": cjVariableType });
            }
        }

        var checkKey = "";
        var len = checklist.length;
        for (var i = 0; i < len; i++) {
            var map = checklist[i];
            var suff = map["suff"];
            var v = map["value"];
            checkKey = suff + word;
            var result = v[checkKey];
            if (result != undefined) {
                return new vscode.Hover(result.description);
            }
        }
        return null;
    }
}

module.exports = hoverProvider;