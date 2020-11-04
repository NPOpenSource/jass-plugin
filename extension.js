// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const hoverProvider = require('./providers/hoverProvider');
const completionProvider = require('./providers/completionProvider');
const referenceProvider = require('./providers/referenceProvider');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('jass 插件已激活');
    console.log(vscode);

    context.subscriptions.push(vscode.languages.registerHoverProvider('vjass', new hoverProvider()));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('vjass', new completionProvider(), '\(', ',', '.'));
    context.subscriptions.push(vscode.languages.registerReferenceProvider('vjass', new referenceProvider()));
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
}