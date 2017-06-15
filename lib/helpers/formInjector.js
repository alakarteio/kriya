'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (WrappedComponent) {
  var Wrapper = function Wrapper(props, _ref) {
    var _reduxForm = _ref._reduxForm;
    return _react2.default.createElement(WrappedComponent, _extends({}, props, { form: _reduxForm.form }));
  };
  Wrapper.contextTypes = {
    _reduxForm: _propTypes2.default.object
  };

  return Wrapper;
};