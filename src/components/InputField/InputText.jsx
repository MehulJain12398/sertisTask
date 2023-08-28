import React from 'react'

const InputText = ({label,id,name,placeholder,value,onChange,errors,onBlur}) => {
  const hasError = !!errors[name];
  return (
    <div className={`section_form__inputBox ${hasError ? 'error' : ''}`}>
    <label className='body1'>{label}</label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={hasError ? 'error' : ''}
      />
       <span className="error-message">{errors[name]}</span>
    </div>
  )
}

export default InputText