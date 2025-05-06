import React from 'react';

function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    message = _ref.message;
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h2", null, "Confirmation"), /*#__PURE__*/React.createElement("button", {
    className: "close-button",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("p", null, message)), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "confirm-button",
    onClick: onClose
  }, "OK"))));
}

export { Modal as default };
