import{t as e,m as t}from"./editor.main.BPk8UX4_.js";import"./preload-helper.D21cck6N.js";var i=Object.defineProperty,s=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,a={};((e,t,a,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of r(t))n.call(e,a)||"default"===a||i(e,a,{get:()=>t[a],enumerable:!(o=s(t,a))||o.enumerable})})(a,t);var o=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=a.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(a.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},l={};function c(e,t,s=0){if("string"==typeof e)return e;if(void 0===e)return"";let i="";if(s){i+=t;for(let e=0;e<s;e++)i+="  "}if(i+=e.messageText,s++,e.next)for(const r of e.next)i+=c(r,t,s);return i}function d(e){return e?e.map((e=>e.text)).join(""):""}l["lib.d.ts"]=!0,l["lib.decorators.d.ts"]=!0,l["lib.decorators.legacy.d.ts"]=!0,l["lib.dom.asynciterable.d.ts"]=!0,l["lib.dom.d.ts"]=!0,l["lib.dom.iterable.d.ts"]=!0,l["lib.es2015.collection.d.ts"]=!0,l["lib.es2015.core.d.ts"]=!0,l["lib.es2015.d.ts"]=!0,l["lib.es2015.generator.d.ts"]=!0,l["lib.es2015.iterable.d.ts"]=!0,l["lib.es2015.promise.d.ts"]=!0,l["lib.es2015.proxy.d.ts"]=!0,l["lib.es2015.reflect.d.ts"]=!0,l["lib.es2015.symbol.d.ts"]=!0,l["lib.es2015.symbol.wellknown.d.ts"]=!0,l["lib.es2016.array.include.d.ts"]=!0,l["lib.es2016.d.ts"]=!0,l["lib.es2016.full.d.ts"]=!0,l["lib.es2016.intl.d.ts"]=!0,l["lib.es2017.d.ts"]=!0,l["lib.es2017.date.d.ts"]=!0,l["lib.es2017.full.d.ts"]=!0,l["lib.es2017.intl.d.ts"]=!0,l["lib.es2017.object.d.ts"]=!0,l["lib.es2017.sharedmemory.d.ts"]=!0,l["lib.es2017.string.d.ts"]=!0,l["lib.es2017.typedarrays.d.ts"]=!0,l["lib.es2018.asyncgenerator.d.ts"]=!0,l["lib.es2018.asynciterable.d.ts"]=!0,l["lib.es2018.d.ts"]=!0,l["lib.es2018.full.d.ts"]=!0,l["lib.es2018.intl.d.ts"]=!0,l["lib.es2018.promise.d.ts"]=!0,l["lib.es2018.regexp.d.ts"]=!0,l["lib.es2019.array.d.ts"]=!0,l["lib.es2019.d.ts"]=!0,l["lib.es2019.full.d.ts"]=!0,l["lib.es2019.intl.d.ts"]=!0,l["lib.es2019.object.d.ts"]=!0,l["lib.es2019.string.d.ts"]=!0,l["lib.es2019.symbol.d.ts"]=!0,l["lib.es2020.bigint.d.ts"]=!0,l["lib.es2020.d.ts"]=!0,l["lib.es2020.date.d.ts"]=!0,l["lib.es2020.full.d.ts"]=!0,l["lib.es2020.intl.d.ts"]=!0,l["lib.es2020.number.d.ts"]=!0,l["lib.es2020.promise.d.ts"]=!0,l["lib.es2020.sharedmemory.d.ts"]=!0,l["lib.es2020.string.d.ts"]=!0,l["lib.es2020.symbol.wellknown.d.ts"]=!0,l["lib.es2021.d.ts"]=!0,l["lib.es2021.full.d.ts"]=!0,l["lib.es2021.intl.d.ts"]=!0,l["lib.es2021.promise.d.ts"]=!0,l["lib.es2021.string.d.ts"]=!0,l["lib.es2021.weakref.d.ts"]=!0,l["lib.es2022.array.d.ts"]=!0,l["lib.es2022.d.ts"]=!0,l["lib.es2022.error.d.ts"]=!0,l["lib.es2022.full.d.ts"]=!0,l["lib.es2022.intl.d.ts"]=!0,l["lib.es2022.object.d.ts"]=!0,l["lib.es2022.regexp.d.ts"]=!0,l["lib.es2022.sharedmemory.d.ts"]=!0,l["lib.es2022.string.d.ts"]=!0,l["lib.es2023.array.d.ts"]=!0,l["lib.es2023.collection.d.ts"]=!0,l["lib.es2023.d.ts"]=!0,l["lib.es2023.full.d.ts"]=!0,l["lib.es5.d.ts"]=!0,l["lib.es6.d.ts"]=!0,l["lib.esnext.collection.d.ts"]=!0,l["lib.esnext.d.ts"]=!0,l["lib.esnext.decorators.d.ts"]=!0,l["lib.esnext.disposable.d.ts"]=!0,l["lib.esnext.full.d.ts"]=!0,l["lib.esnext.intl.d.ts"]=!0,l["lib.esnext.object.d.ts"]=!0,l["lib.esnext.promise.d.ts"]=!0,l["lib.scripthost.d.ts"]=!0,l["lib.webworker.asynciterable.d.ts"]=!0,l["lib.webworker.d.ts"]=!0,l["lib.webworker.importscripts.d.ts"]=!0,l["lib.webworker.iterable.d.ts"]=!0;var u=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let s=e.getPositionAt(t.start),i=e.getPositionAt(t.start+t.length),{lineNumber:r,column:n}=s,{lineNumber:a,column:o}=i;return{startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o}}},g=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return!!e&&0===e.path.indexOf("/lib.")&&!!l[e.path.slice(1)]}getOrCreateModel(t){const s=a.Uri.parse(t),i=a.editor.getModel(s);if(i)return i;if(this.isLibFile(s)&&this._hasFetchedLibFiles)return a.editor.createModel(this._libFiles[s.path.slice(1)],"typescript",s);const r=e.getExtraLibs()[t];return r?a.editor.createModel(r.content,"typescript",s):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}},p=class extends u{constructor(e,t,s,i){super(i),this._libFiles=e,this._defaults=t,this._selector=s,this._disposables=[],this._listener=Object.create(null);const r=e=>{if(e.getLanguageId()!==s)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let i;const r=e.onDidChangeContent((()=>{clearTimeout(i),i=window.setTimeout(t,500)})),n=e.onDidChangeAttached((()=>{const{onlyVisible:s}=this._defaults.getDiagnosticsOptions();s&&(e.isAttachedToEditor()?t():a.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){r.dispose(),n.dispose(),clearTimeout(i)}},t()},n=e=>{a.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(a.editor.onDidCreateModel((e=>r(e)))),this._disposables.push(a.editor.onWillDisposeModel(n)),this._disposables.push(a.editor.onDidChangeModelLanguage((e=>{n(e.model),r(e.model)}))),this._disposables.push({dispose(){for(const e of a.editor.getModels())n(e)}});const o=()=>{for(const e of a.editor.getModels())n(e),r(e)};this._disposables.push(this._defaults.onDidChange(o)),this._disposables.push(this._defaults.onDidExtraLibsChange(o)),a.editor.getModels().forEach((e=>r(e)))}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const s=[],{noSyntaxValidation:i,noSemanticValidation:r,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();i||s.push(t.getSyntacticDiagnostics(e.uri.toString())),r||s.push(t.getSemanticDiagnostics(e.uri.toString())),n||s.push(t.getSuggestionDiagnostics(e.uri.toString()));const o=await Promise.all(s);if(!o||e.isDisposed())return;const l=o.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),c=l.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?a.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(c),e.isDisposed()||a.editor.setModelMarkers(e,this._selector,l.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){const s=t.start||0,i=t.length||1,{lineNumber:r,column:n}=e.getPositionAt(s),{lineNumber:o,column:l}=e.getPositionAt(s+i),d=[];return t.reportsUnnecessary&&d.push(a.MarkerTag.Unnecessary),t.reportsDeprecated&&d.push(a.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:n,endLineNumber:o,endColumn:l,message:c(t.messageText,"\n"),code:t.code.toString(),tags:d,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const s=[];return t.forEach((t=>{let i=e;if(t.file&&(i=this._libFiles.getOrCreateModel(t.file.fileName)),!i)return;const r=t.start||0,n=t.length||1,{lineNumber:a,column:o}=i.getPositionAt(r),{lineNumber:l,column:d}=i.getPositionAt(r+n);s.push({resource:i.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:d,message:c(t.messageText,"\n")})})),s}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return a.MarkerSeverity.Error;case 3:return a.MarkerSeverity.Info;case 0:return a.MarkerSeverity.Warning;case 2:return a.MarkerSeverity.Hint}return a.MarkerSeverity.Info}},m=class e extends u{get triggerCharacters(){return["."]}async provideCompletionItems(t,s,i,r){const n=t.getWordUntilPosition(s),o=new a.Range(s.lineNumber,n.startColumn,s.lineNumber,n.endColumn),l=t.uri,c=t.getOffsetAt(s),d=await this._worker(l);if(t.isDisposed())return;const u=await d.getCompletionsAtPosition(l.toString(),c);return u&&!t.isDisposed()?{suggestions:u.entries.map((i=>{let r=o;if(i.replacementSpan){const e=t.getPositionAt(i.replacementSpan.start),s=t.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);r=new a.Range(e.lineNumber,e.column,s.lineNumber,s.column)}const n=[];return void 0!==i.kindModifiers&&-1!==i.kindModifiers.indexOf("deprecated")&&n.push(a.languages.CompletionItemTag.Deprecated),{uri:l,position:s,offset:c,range:r,label:i.name,insertText:i.name,sortText:i.sortText,kind:e.convertKind(i.kind),tags:n}}))}:void 0}async resolveCompletionItem(t,s){const i=t,r=i.uri,n=i.position,a=i.offset,o=await this._worker(r),l=await o.getCompletionEntryDetails(r.toString(),a,i.label);return l?{uri:r,position:n,label:l.name,kind:e.convertKind(l.kind),detail:d(l.displayParts),documentation:{value:e.createDocumentationString(l)}}:i}static convertKind(e){switch(e){case x.primitiveType:case x.keyword:return a.languages.CompletionItemKind.Keyword;case x.variable:case x.localVariable:return a.languages.CompletionItemKind.Variable;case x.memberVariable:case x.memberGetAccessor:case x.memberSetAccessor:return a.languages.CompletionItemKind.Field;case x.function:case x.memberFunction:case x.constructSignature:case x.callSignature:case x.indexSignature:return a.languages.CompletionItemKind.Function;case x.enum:return a.languages.CompletionItemKind.Enum;case x.module:return a.languages.CompletionItemKind.Module;case x.class:return a.languages.CompletionItemKind.Class;case x.interface:return a.languages.CompletionItemKind.Interface;case x.warning:return a.languages.CompletionItemKind.File}return a.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=d(e.documentation);if(e.tags)for(const s of e.tags)t+=`\n\n${h(s)}`;return t}};function h(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[s,...i]=e.text;t+=`\`${s.text}\``,i.length>0&&(t+=` — ${i.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var b=class e extends u{constructor(){super(...arguments),this.signatureHelpTriggerCharacters=["(",","]}static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case a.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(t,s,i,r){const n=t.uri,a=t.getOffsetAt(s),o=await this._worker(n);if(t.isDisposed())return;const l=await o.getSignatureHelpItems(n.toString(),a,{triggerReason:e._toSignatureHelpTriggerReason(r)});if(!l||t.isDisposed())return;const c={activeSignature:l.selectedItemIndex,activeParameter:l.argumentIndex,signatures:[]};return l.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:d(e.documentation)},t.label+=d(e.prefixDisplayParts),e.parameters.forEach(((s,i,r)=>{const n=d(s.displayParts),a={label:n,documentation:{value:d(s.documentation)}};t.label+=n,t.parameters.push(a),i<r.length-1&&(t.label+=d(e.separatorDisplayParts))})),t.label+=d(e.suffixDisplayParts),c.signatures.push(t)})),{value:c,dispose(){}}}},f=class extends u{async provideHover(e,t,s){const i=e.uri,r=e.getOffsetAt(t),n=await this._worker(i);if(e.isDisposed())return;const a=await n.getQuickInfoAtPosition(i.toString(),r);if(!a||e.isDisposed())return;const o=d(a.documentation),l=a.tags?a.tags.map((e=>h(e))).join("  \n\n"):"",c=d(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+c+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}},y=class extends u{async provideDocumentHighlights(e,t,s){const i=e.uri,r=e.getOffsetAt(t),n=await this._worker(i);if(e.isDisposed())return;const o=await n.getDocumentHighlights(i.toString(),r,[i.toString()]);return o&&!e.isDisposed()?o.flatMap((t=>t.highlightSpans.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:"writtenReference"===t.kind?a.languages.DocumentHighlightKind.Write:a.languages.DocumentHighlightKind.Text}))))):void 0}},_=class extends u{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,s){const i=e.uri,r=e.getOffsetAt(t),n=await this._worker(i);if(e.isDisposed())return;const o=await n.getDefinitionAtPosition(i.toString(),r);if(!o||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(o.map((e=>a.Uri.parse(e.fileName)))),e.isDisposed())return;const l=[];for(let e of o){const t=this._libFiles.getOrCreateModel(e.fileName);t&&l.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return l}},w=class extends u{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,s,i){const r=e.uri,n=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getReferencesAtPosition(r.toString(),n);if(!l||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(l.map((e=>a.Uri.parse(e.fileName)))),e.isDisposed())return;const c=[];for(let e of l){const t=this._libFiles.getOrCreateModel(e.fileName);t&&c.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return c}},S=class extends u{async provideDocumentSymbols(e,t){const s=e.uri,i=await this._worker(s);if(e.isDisposed())return;const r=await i.getNavigationTree(s.toString());if(!r||e.isDisposed())return;const n=(t,s)=>({name:t.text,detail:"",kind:k[t.kind]||a.languages.SymbolKind.Variable,range:this._textSpanToRange(e,t.spans[0]),selectionRange:this._textSpanToRange(e,t.spans[0]),tags:[],children:t.childItems?.map((e=>n(e,t.text))),containerName:s});return r.childItems?r.childItems.map((e=>n(e))):[]}},x=class{static{this.unknown=""}static{this.keyword="keyword"}static{this.script="script"}static{this.module="module"}static{this.class="class"}static{this.interface="interface"}static{this.type="type"}static{this.enum="enum"}static{this.variable="var"}static{this.localVariable="local var"}static{this.function="function"}static{this.localFunction="local function"}static{this.memberFunction="method"}static{this.memberGetAccessor="getter"}static{this.memberSetAccessor="setter"}static{this.memberVariable="property"}static{this.constructorImplementation="constructor"}static{this.callSignature="call"}static{this.indexSignature="index"}static{this.constructSignature="construct"}static{this.parameter="parameter"}static{this.typeParameter="type parameter"}static{this.primitiveType="primitive type"}static{this.label="label"}static{this.alias="alias"}static{this.const="const"}static{this.let="let"}static{this.warning="warning"}},k=Object.create(null);k[x.module]=a.languages.SymbolKind.Module,k[x.class]=a.languages.SymbolKind.Class,k[x.enum]=a.languages.SymbolKind.Enum,k[x.interface]=a.languages.SymbolKind.Interface,k[x.memberFunction]=a.languages.SymbolKind.Method,k[x.memberVariable]=a.languages.SymbolKind.Property,k[x.memberGetAccessor]=a.languages.SymbolKind.Property,k[x.memberSetAccessor]=a.languages.SymbolKind.Property,k[x.variable]=a.languages.SymbolKind.Variable,k[x.const]=a.languages.SymbolKind.Variable,k[x.localVariable]=a.languages.SymbolKind.Variable,k[x.variable]=a.languages.SymbolKind.Variable,k[x.function]=a.languages.SymbolKind.Function,k[x.localFunction]=a.languages.SymbolKind.Function;var v,C,D=class extends u{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},F=class extends D{constructor(){super(...arguments),this.canFormatMultipleRanges=!1}async provideDocumentRangeFormattingEdits(e,t,s,i){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getFormattingEditsForRange(r.toString(),n,a,D._convertOptions(s));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},I=class extends D{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,s,i,r){const n=e.uri,a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getFormattingEditsAfterKeystroke(n.toString(),a,s,D._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},A=class extends D{async provideCodeActions(e,t,s,i){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=D._convertOptions(e.getOptions()),l=s.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),c=await this._worker(r);if(e.isDisposed())return;const d=await c.getCodeFixesAtPosition(r.toString(),n,a,l,o);return!d||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:d.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,s,t))),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,s){const i=[];for(const t of s.changes)for(const s of t.textChanges)i.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,s.span),text:s.newText}});return{title:s.description,edit:{edits:i},diagnostics:t.markers,kind:"quickfix"}}},P=class extends u{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,s,i){const r=e.uri,n=r.toString(),a=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getRenameInfo(n,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");const c=await o.findRenameLocations(n,a,!1,!1,!1);if(!c||e.isDisposed())return;const d=[];for(const e of c){const t=this._libFiles.getOrCreateModel(e.fileName);if(!t)throw new Error(`Unknown file ${e.fileName}.`);d.push({resource:t.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(t,e.textSpan),text:s}})}return{edits:d}}},T=class extends u{async provideInlayHints(e,t,s){const i=e.uri,r=i.toString(),n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(i);return e.isDisposed()?null:{hints:(await o.provideInlayHints(r,n,a)).map((t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)}))),dispose:()=>{}}}_convertHintKind(e){return"Parameter"===e?a.languages.InlayHintKind.Parameter:a.languages.InlayHintKind.Type}};function L(e){C=M(e,"typescript")}function O(e){v=M(e,"javascript")}function N(){return new Promise(((e,t)=>{if(!v)return t("JavaScript not registered!");e(v)}))}function K(){return new Promise(((e,t)=>{if(!C)return t("TypeScript not registered!");e(C)}))}function M(e,t){const s=[],i=new o(t,e),r=(...e)=>i.getLanguageServiceWorker(...e),n=new g(r);return function(){const{modeConfiguration:i}=e;!function(e){for(;e.length;)e.pop().dispose()}(s),i.completionItems&&s.push(a.languages.registerCompletionItemProvider(t,new m(r))),i.signatureHelp&&s.push(a.languages.registerSignatureHelpProvider(t,new b(r))),i.hovers&&s.push(a.languages.registerHoverProvider(t,new f(r))),i.documentHighlights&&s.push(a.languages.registerDocumentHighlightProvider(t,new y(r))),i.definitions&&s.push(a.languages.registerDefinitionProvider(t,new _(n,r))),i.references&&s.push(a.languages.registerReferenceProvider(t,new w(n,r))),i.documentSymbols&&s.push(a.languages.registerDocumentSymbolProvider(t,new S(r))),i.rename&&s.push(a.languages.registerRenameProvider(t,new P(n,r))),i.documentRangeFormattingEdits&&s.push(a.languages.registerDocumentRangeFormattingEditProvider(t,new F(r))),i.onTypeFormattingEdits&&s.push(a.languages.registerOnTypeFormattingEditProvider(t,new I(r))),i.codeActions&&s.push(a.languages.registerCodeActionProvider(t,new A(r))),i.inlayHints&&s.push(a.languages.registerInlayHintsProvider(t,new T(r))),i.diagnostics&&s.push(new p(n,e,t,r))}(),r}export{u as Adapter,A as CodeActionAdaptor,_ as DefinitionAdapter,p as DiagnosticsAdapter,y as DocumentHighlightAdapter,F as FormatAdapter,D as FormatHelper,I as FormatOnTypeAdapter,T as InlayHintsAdapter,x as Kind,g as LibFiles,S as OutlineAdapter,f as QuickInfoAdapter,w as ReferenceAdapter,P as RenameAdapter,b as SignatureHelpAdapter,m as SuggestAdapter,o as WorkerManager,c as flattenDiagnosticMessageText,N as getJavaScriptWorker,K as getTypeScriptWorker,O as setupJavaScript,L as setupTypeScript};