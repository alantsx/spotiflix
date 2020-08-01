import { useState } from 'react';

function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handleCategoria(props) {
        setValue(
            props.target.getAttribute("name"),
            props.target.value
        );
    }

    function clearForm() {
        setValues(valoresIniciais);
    }

    return {
        values,
        handleCategoria,
        clearForm,
    };
}

export default useForm;