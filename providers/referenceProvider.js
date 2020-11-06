const vscode = require('vscode');

class referenceProvider {

    provideReferences(document, position, options, token) {
        const line = document.lineAt(position);
        const lineText = line.text;
        const range = document.getWordRangeAtPosition(position);
        // const startLoc = range.start.character;
        const endLoc = range.end.character;
        const lineLenth = lineText.length;

        const word = document.getText(range);
        //函数只匹配 xxx(格式的
        console.log("lineText");
        console.log(lineText);
        console.log(word);
        return null;
    };
}

module.exports = referenceProvider;