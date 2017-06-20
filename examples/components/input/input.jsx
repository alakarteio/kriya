import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import Input from '../../../src/input'
import Button from '../../../src/button'
import { numberOptions, stringOptions } from '../../constant'
import styles from './input.styles.scss'

const formName = 'INPUT'

const Form = ({ style, className }) => {
  const classes = classnames(
    styles.form,
    className,
  )

  return (
    <form
      className={classes}
      style={style}
      id={formName}
    >
      <h1>Examples INPUT</h1>
      {/* form input */}
      <div>
        <Input type="input" placeholder="input" name="input" required label="Input label" />
        <Input type="textarea" placeholder="textarea" name="textArea" />
        <Input type="select" placeholder="select" name="select" options={stringOptions} />
      </div>
      <div>
        <Input type="selectbox" placeholder="selectbox" name="selectbox" options={numberOptions} required />
        <Input type="selectbox" placeholder="selectbox multi" name="selectbox_multi_string" options={stringOptions} multi />
        <Input type="selectbox" placeholder="selectbox multi" name="selectbox_multi_number" options={numberOptions} multi />
        <Input type="checkbox" name="checkbox" />
      </div>
      <Button type="submit" name="SUBMIT">Submit</Button>
    </form>
  )
}

Form.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
}

Form.defaultProps = {
  style: {},
  className: '',
}

export default reduxForm({ form: formName })(onlyUpdateForPropTypes(Form))
