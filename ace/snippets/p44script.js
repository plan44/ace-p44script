ace.define("ace/snippets/p44script",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "## Function\n\
snippet func\n\
	function ${1:function_name} (${2:argument} ${3:[ , arguments...]})\n\
	{\n\
		${4:/* function body */}\n\
	}\n\
## Concurrent\n\
snippet conc\n\
	concurrent as ${1:threadname}\n\
	{\n\
		${2:/* concurrently running code */}\n\
	}\n\
## Handler\n\
snippet on\n\
	on (${1:trigger expression}) stable ${2:min_seconds} ${3:[toggling\|changing\|evaluating]} as ${4:trigger_result_var}\n\
	{\n\
		${5:/* handler code to run when trigger fires */}\n\
	}\n\
## Foreach\n\
snippet fore\n\
	foreach ${1:object or array} as ${2:[key,]} ${3:value}\n\
	{\n\
		${5:/* do something with value (and optionally, key) */}\n\
	}\n\
## Try/Catch\n\
snippet try\n\
	try {\n\
		${1:/* code that may cause error */}\n\
	}\n\
	catch as ${2:error_variable} {\n\
		${3:/* code that is run when error happens in try above. */}\n\
	}\n\
## If/Else\n\
snippet if\n\
	if (${1:condition}) {\n\
		${2:/* code executed when condition is true */}\n\
	}\n\
	else {\n\
		${3:/* code executed when condition is false */}\n\
	}\n\
## while\n\
snippet whi\n\
	while (${1:condition}) {\n\
		${2:/* code executed repeatedly as long as condition is true */}\n\
	}\n\
";
exports.scope = "p44script";

});
(function() {
    ace.require(["ace/snippets/p44script"], function(m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
