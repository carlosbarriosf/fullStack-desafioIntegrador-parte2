
import { useState } from 'react'

export function useForm(INITIAL_STATE) {

    const [values, setValues] = useState(INITIAL_STATE)

    const handleInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const resetForm = () => setValues(INITIAL_STATE)

    return {
        values,
        handleInputChange,
        resetForm
    }
}

