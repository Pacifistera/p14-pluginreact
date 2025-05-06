'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    message = _ref.message;
  if (!isOpen) return null;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React__default["default"].createElement("h2", null, "Confirmation"), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "close-button",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, message)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "confirm-button",
    onClick: onClose
  }, "OK"))));
}

module.exports = Modal;
