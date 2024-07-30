import React from 'react';

function Input({ type = 'text', placeholder, onChange, value, ...rest }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
}

export default Input;
