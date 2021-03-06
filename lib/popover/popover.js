'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _recompose = require('recompose');

var _popoverStyles = require('../../src/popover/popover.styles.scss');

var _popoverStyles2 = _interopRequireDefault(_popoverStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Popover = function Popover(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      onClose = _ref.onClose,
      print = _ref.print,
      contents = _ref.contents;

  var classes = (0, _classnames3.default)(_popoverStyles2.default.popover, className, _defineProperty({}, _popoverStyles2.default.print, print));

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    _react2.default.createElement(
      'div',
      { style: style, className: classes, onClick: onClose },
      _react2.default.cloneElement(children, _extends({ print: print, onClose: onClose }, contents))
    )
  );
};

Popover.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  onClose: _propTypes2.default.func,
  print: _propTypes2.default.bool,
  contents: _propTypes2.default.object
};

Popover.defaultProps = {
  style: {},
  className: '',
  onClose: undefined,
  print: false,
  contents: undefined
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Popover);