import { useState } from 'react'

export const useForm = (initialValues, inputValidations) => {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const onChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.type === "checkbox" ? target.checked : target.value
        })

        if (inputValidations[target.name] && !inputValidations[target.name].validation(target.value)) {
            setErrors({...errors, [target.name]: inputValidations[target.name].errorText})
        } else {
            setErrors({...errors, [target.name]: null})
        }
    }

    const resetForm = () => {
        setValues(initialValues)
    }

    return({
        values,
        errors,
        onChange,
        resetForm
    })
}