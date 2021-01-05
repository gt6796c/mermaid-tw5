/*\
title: $:/plugins/gt6796c/mermaid-tw5/wrapper.js
type: application/javascript
module-type: widget

\*/
(function() {
  /* jslint node: true, browser: true */
  /* global $tw: false */
  'use strict';
  let uniqueID = 1;

  let Widget = require("$:/core/modules/widgets/widget.js").widget;
  let Rocklib = require("$:/plugins/gt6796c/rocklib/widget-tools.js").rocklib;
  if ($tw.browser && !window.mermaidAPI) {
    window.rocklib = new Rocklib();
    window.mermaidAPI = require("$:/plugins/gt6796c/mermaid-tw5/mermaid.min.js").mermaidAPI;
  }

  let MermaidWidget = function(parseTreeNode, options) {
    this.initialise(parseTreeNode, options);
  };

  MermaidWidget.prototype = new Widget();

  /*
     Render this widget into the DOM
     */
  MermaidWidget.prototype.render = function(parent, nextSibling) {
    this.parentDomNode = parent;
    this.computeAttributes();
    this.execute();

    let tag = "mermaid";
    let scriptBody = rocklib.getScriptBody(this, "text");
    let divNode = rocklib.getCanvas(this, tag);
    let _insertSVG = function(svgCode, bindFunctions) {
      divNode.innerHTML = svgCode;
    };
    try {
      let options = { theme: "simple" };
      rocklib.getOptions(this, tag, options);
      window.mermaidAPI.render(divNode.id, scriptBody, _insertSVG);
    } catch (ex) {
      divNode.innerText = ex;
    }
    parent.insertBefore(divNode, nextSibling);

    this.domNodes.push(divNode);
  };

  MermaidWidget.prototype.execute = function() {
    // Nothing to do
  };

  /*
     Selectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering
     */
  MermaidWidget.prototype.refresh = function(changedTiddlers) {
    return false;
  };

  exports.mermaid = MermaidWidget;
})();
