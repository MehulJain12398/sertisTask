import React from 'react'
import Icon from '../../assets/angleUp.svg'

const InputSelect = ({label,value,name,onChange,options}) => {
 
  return (
    <div className="section_form__inputBox">
    <label className='body1'>{label}</label>
      <select
        value={value}
        name={name}
        onChange={onChange}>
            {options.map(item => {
                return(
                    <option key={`${item.dial_code} ${item?.name}`} value={item.dial_code}>{item?.name} {`(${item?.dial_code})`} </option>
                )
            })}
        </select>
        <div className='icon_container'>
          <img src={Icon} alt="arrow-icon" />
        </div>
        <span className="error-message"></span>
    </div>
  )
}

export default InputSelect