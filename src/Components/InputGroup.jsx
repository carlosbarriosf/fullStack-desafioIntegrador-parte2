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
    max = undefined,
    ...props
}) {
  
    const [isValid, setIsValid] = useState(undefined)
    const [errorMsg, setErrorMsg] = useState('')


    useEffect(() => {
        // console.log('isValidChangedTo:',isValid)
        if(!isValid && isValid !== undefined) {
            setErrorMsg(errorMessage)
        } else {
            setErrorMsg('')
        }
        console.log(isValid)
    }, [isValid, errorMessage])



    return (
    <div className={className}>
        <label htmlFor={id}>{label}</label>
        {type === 'textarea' ?
            <textarea
                name={id}
                id={id}
                value={values[id]}
                onChange={onChange}
                required={required}
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
                    if(values[id]) {
                        setIsValid(validation)
                    }
                }}
                required={required}
                min={min}
                max={max}
                {...props}
            />
        }
        <p>{errorMsg}</p>
    </div>
  )
}

export default InputGroup