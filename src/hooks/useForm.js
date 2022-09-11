import { useState } from "react";

const useForm = (props) => {
    const [ formData, setFormData ] = useState(props);

    const setDynamicFormData = (param, value) => {
        setFormData({ 
            data: { 
                ...formData.data, 
                [param]: value, 
            }, 
            error: { ...formData.error, ...validate(param, value) } 
        });
    };

    const validate = (param, value) => {
        const error = {};
        if (!value) {
            error[param] = `${param} es requerido`;
        } else {
            error[param] = "";
        }
        return error;
    };

    const isValid = 
        Object.keys(formData.error).length === Object.keys(formData.data).length && 
        Object.values(formData.error).every((d) => d === "")

    const clearForm = () => {
        setFormData(props);
    };

    return {
        formData,
        setDynamicFormData,
        clearForm,
        isValid,
    };
};

export default useForm;