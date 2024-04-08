
import { useState } from 'react'

export function useForm(INITIAL_STATE) {

    const [values, setValues] = useState(INITIAL_STATE)

    const handleInputChange = e => {
        if(e.target.name === 'freeShipping') {
            console.log('checkbox')
            setValues({
                ...values,
                freeShipping: e.target.checked
            })
        } else {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }
    }

    const resetForm = () => setValues(INITIAL_STATE)

    return {
        values,
        setValues,
        handleInputChange,
        resetForm
    }
}

