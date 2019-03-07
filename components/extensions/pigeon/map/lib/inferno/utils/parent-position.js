"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parentPosition;
function parentPosition(element) {
  var rect = element.getBoundingClientRect();
  return { x: rect.left, y: rect.top };
}