(self.webpackChunksmarthomedoctor_strapi=self.webpackChunksmarthomedoctor_strapi||[]).push([[953],{96477:(f,w,l)=>{(function(a){a(l(4631))})(function(a){"use strict";function r(s,e){if(!window.JSHINT)return window.console&&window.console.error("Error: window.JSHINT not defined, CodeMirror JavaScript linting cannot run."),[];e.indent||(e.indent=1),JSHINT(s,e,e.globals);var i=JSHINT.data().errors,n=[];return i&&u(i,n),n}a.registerHelper("lint","javascript",r);function u(s,e){for(var i=0;i<s.length;i++){var n=s[i];if(n){if(n.line<=0){window.console&&window.console.warn("Cannot display JSHint error (invalid line "+n.line+")",n);continue}var t=n.character-1,o=t+1;if(n.evidence){var c=n.evidence.substring(t).search(/.\b/);c>-1&&(o+=c)}var d={message:n.reason,severity:n.code&&n.code.startsWith("W")?"warning":"error",from:a.Pos(n.line-1,t),to:a.Pos(n.line-1,o)};e.push(d)}}}})}}]);
