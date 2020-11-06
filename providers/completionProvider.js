const vscode = require('vscode');
const uitls = require('../utils/utilHelper');

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


class completionProvider {
    constructor() {
        let tempfuns = {};
        Object.assign(tempfuns, bjFunJson);
        Object.assign(tempfuns, cjFunJson);
        this.funs = tempfuns;
        let tempcons = {};
        Object.assign(tempcons, bjConstant);
        Object.assign(tempcons, cjConstant);
        this.cons = tempcons;
    }

    provideCompletionItems(document, position, token, context) {
        return null;
        const line = document.lineAt(position);
        // const lineText = line.text;
        const range = document.getWordRangeAtPosition(position);
        const word = document.getText(range);
        console.log(word);
        if (uitls.funSuff == word) {
            return Object.keys(this.funs).map(dep => {
                return new vscode.CompletionItem(dep, vscode.CompletionItemKind.Function);
            });
        }
        if (uitls.conSuff == word) {
            return Object.keys(this.cons).map(dep => {
                return new vscode.CompletionItem(dep, vscode.CompletionItemKind.Constant);
            });
        }
        if (uitls.varSuff == word) {
            return Object.keys(bjVariable).map(dep => {
                return new vscode.CompletionItem(dep, vscode.CompletionItemKind.Constant);
            });
        }
        return null;
    };
    resolveCompletionItem(item, token) {
        const label = item.label;
        if (uitls.funSuff == label.substring(0, 3)) {
            item.label = this.funs[label].completion;
        }
        if (uitls.conSuff == label.substring(0, 3)) {
            item.label = this.cons[label].completion;
        }
        if (uitls.varSuff == label.substring(0, 3)) {
            item.label = bjVariable[label].completion;
        }
        return item;
    }
}

module.exports = completionProvider;