import React from 'react';

const TextInputField = props => {
  return(
    <label>{props.label}
    <input
      name={props.name}
<<<<<<< HEAD
      type='text'
=======
      type='radio'
>>>>>>> ba049f00f2e17993570c901db1b0995b14a46ad9
      value={props.value}
      onChange={props.handleChange}
    />
    </label>
  )
}

export default TextInputField;
