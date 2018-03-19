'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = require('redux-form');

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

var _recompose = require('recompose');

var _kriyaSelect = require('kriya-select');

var _kriyaSelect2 = _interopRequireDefault(_kriyaSelect);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

var _inputStyles = require('../../src/input/input.styles.scss');

var _inputStyles2 = _interopRequireDefault(_inputStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getComponent = function getComponent(type) {
  switch (type) {
    case 'select':
      return 'select';
    case 'textarea':
      return 'textarea';
    case 'checkbox':
      return _checkbox2.default;
    default:
      return _field2.default;
  }
};

var types = ['checkbox', 'color', 'date', 'datetime-local', 'email', 'month', 'number', 'password', 'radio', 'range', 'search', 'select', 'selectbox', 'tel', 'text', 'textarea', 'time', 'url', 'week'];

/**
 * To customize the default 'required' message, or in order to add the field level validation
 * you have to pass a `validate` prop to the Input component, which will override it.
 *
 * NB: `redux-form` perform 'unregister_field' then 'register_field'
 * whenever the validate prop changes.
 * So, to avoid breaking the validation process (form or field level),
 * `validate` props should be declared as constants outside of any Component.
 * You can look at the example part of this project to see how it's done.
 */
var validateRequired = [function (value) {
  return value ? undefined : 'required';
}];
var defaultValidate = [];

var Input = function Input(_ref) {
  var _classnames3;

  var className = _ref.className,
      style = _ref.style,
      type = _ref.type,
      name = _ref.name,
      label = _ref.label,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      required = _ref.required,
      options = _ref.options,
      value = _ref.value,
      hiddenLabel = _ref.hiddenLabel,
      asynch = _ref.asynch,
      creatable = _ref.creatable,
      loadOptions = _ref.loadOptions,
      error = _ref.error,
      validate = _ref.validate,
      onPaste = _ref.onPaste,
      selectboxProps = _objectWithoutProperties(_ref, ['className', 'style', 'type', 'name', 'label', 'placeholder', 'disabled', 'required', 'options', 'value', 'hiddenLabel', 'asynch', 'creatable', 'loadOptions', 'error', 'validate', 'onPaste']);

  var classes = (0, _classnames5.default)(_inputStyles2.default.input, _defineProperty({}, _inputStyles2.default.showLabel, !hiddenLabel), _inputStyles2.default['type-' + type], className);

  var commonProps = { name: name, placeholder: placeholder, disabled: disabled };

  var SelectComponent = _kriyaSelect2.default;
  if (asynch) SelectComponent = _kriyaSelect2.default.Async;
  if (creatable) SelectComponent = _kriyaSelect2.default.Creatable;

  var select = _react2.default.createElement(SelectComponent, _extends({
    value: value,
    options: options,
    loadOptions: loadOptions,
    className: (0, _classnames5.default)(_defineProperty({}, _inputStyles2.default.error, !!error))
  }, commonProps, selectboxProps));

  var field = _react2.default.createElement(
    _reduxForm.Field,
    _extends({
      className: (0, _classnames5.default)((_classnames3 = {}, _defineProperty(_classnames3, _inputStyles2.default.error, !!error), _defineProperty(_classnames3, _inputStyles2.default.field, type !== 'checkbox'), _classnames3)),
      component: getComponent(type)
    }, commonProps, {
      validate: validate || (required ? validateRequired : defaultValidate),
      type: type,
      onPaste: onPaste
    }),
    type === 'select' ? options.map(function (o) {
      return _react2.default.createElement(
        'option',
        { key: o.value, value: o.value },
        o.label
      );
    }) : null
  );

  return _react2.default.createElement(
    'div',
    { className: classes, style: style },
    label && _react2.default.createElement(
      'label',
      { htmlFor: name },
      label,
      required && _react2.default.createElement(
        'div',
        { className: _inputStyles2.default.mandatory },
        '\xA0*'
      )
    ),
    type === 'selectbox' ? select : field,
    type === 'select' && _react2.default.createElement('i', { className: (0, _classnames5.default)(_inputStyles2.default.arrow, 'mdv-expand_more') }),
    _react2.default.createElement(
      'div',
      { className: _inputStyles2.default.errorMsg },
      error
    )
  );
};

Input.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,
  hiddenLabel: _propTypes2.default.bool,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool, _propTypes2.default.array, _propTypes2.default.object]),
  asynch: _propTypes2.default.bool,
  creatable: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  type: _propTypes2.default.oneOf(types),
  disabled: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    label: _propTypes2.default.string
  })),
  onChange: _propTypes2.default.func,
  onInputChange: _propTypes2.default.func,
  loadOptions: _propTypes2.default.func,
  error: _propTypes2.default.any,
  validate: _propTypes2.default.array,
  onPaste: _propTypes2.default.func
};

Input.defaultProps = {
  type: 'text',
  label: undefined,
  value: undefined,
  asynch: false,
  hiddenLabel: false,
  creatable: false,
  disabled: false,
  required: false,
  placeholder: '',
  className: '',
  style: {},
  options: [],
  onChange: undefined,
  onInputChange: undefined,
  loadOptions: undefined,
  error: false,
  validate: undefined,
  onPaste: undefined
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(Input);