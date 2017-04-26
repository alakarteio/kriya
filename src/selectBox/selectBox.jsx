import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import Select from 'react-select'
import styles from './selectBox.styles.scss'

const SelectBox =
  ({
     className, style,
     name,
     label,
     required,
     ...selectProps,
   }) => {

    const classes = classnames(
      styles.select,
      className,
    )

    return (
      <div className={classes} style={style}>
        {label && <label htmlFor={name}>{label}{required && '*'}</label>}
        <Select
          simpleValue
          {...selectProps}
        />
      </div>
    )
  }

SelectBox.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  onChange: PropTypes.func.isRequired,
}

SelectBox.defaultProps = {
  label: undefined,
  value: undefined,
  required: false,
  className: '',
  style: {},
  options: [],
}

export default onlyUpdateForPropTypes(SelectBox)