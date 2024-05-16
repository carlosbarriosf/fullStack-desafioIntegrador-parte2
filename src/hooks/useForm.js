
import { useState } from 'react'

export function useForm(INITIAL_STATE) {

    const [values, setValues] = useState(INITIAL_STATE)

    const handleInputChange = e => {
        console.log(values)
        if(e.target.name === 'freeShipping') {
            console.log('checkbox')
            setValues({
                ...values,
                freeShipping: e.target.checked
            })
        } else if (e.target.type === 'file') {
            console.log(e.target.files[0])
            console.log(e.target.name)
            setValues({
                ...values,
                [e.target.name]: e.target.value,
                imageFile: e.target.files[0]
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

