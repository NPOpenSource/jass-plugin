const vscode = require('vscode');
const uitls = require('../utils/utilHelper');


class completionProvider {
    provideCompletionItems(document, position, token, context) {

        return null;
    };
    resolveCompletionItem(item, token) {
        return null;
    }
}

module.exports = completionProvider;