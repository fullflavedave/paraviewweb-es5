'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = document.querySelector('.content');

function process(idx, list) {
    console.log(idx, list);
}

_reactDom2.default.render(_react2.default.createElement(_2.default, { list: [{ name: "Choice A" }, { name: "Choice B" }, { name: "Choice C" }], onChange: process }), container);

container.style.margin = 0;