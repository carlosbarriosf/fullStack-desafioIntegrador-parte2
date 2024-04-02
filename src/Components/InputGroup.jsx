import React, { useEffect, useState } from 'react'

function InputGroup({
    id, 
    label, 
    type = 'text', 
    onChange, 
    validation,
    errorMessage, 
    values, 
    required = false,
    className = 'form__row',
    min = undefined,
    max = undefined
}) {
  
    const [isValid, setIsValid] = useState()
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        // console.log('isValidChangedTo:',isValid)
        if(!isValid && values[id] !== "") {
            setErrorMsg(errorMessage)
        } else {
            setErrorMsg('')
        }
    }, [isValid])

    return (
    <div className={className}>
        <label htmlFor={id}>{label}</label>
        {type === 'textarea' ?
            <textarea
                name={id}
                id={id}
            >
            </textarea>
            :     
            <input 
                type={type} 
                name={id} 
                id={id} 
                onChange={onChange}
                value={values[id]}
                onBlur={() => {
                    setIsValid(validation)                   
                }}
                required={required}
                min={min}
                max={max}
            />
        }
        <p>{errorMsg}</p>
    </div>
  )
}

export default InputGroup