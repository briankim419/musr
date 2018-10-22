import React from 'react';

const TextInputField = props => {
  return(
    <label>{props.label}
    <input
      name={props.name}
      type='radio'
      value={props.value}
      onChange={props.handleChange}
    />
    </label>
  )
}

export default TextInputField;
