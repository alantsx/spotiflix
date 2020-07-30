import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
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

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([...categorias, values]);
                setValues(valoresIniciais);
            }}>
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    value={values.nome}
                    name="nome"
                    onChange={handleCategoria}
                />

                <FormField
                    label="Descricao"
                    type="text"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleCategoria}
                />

                <FormField
                    label="Cor"
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handleCategoria}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    console.log(categoria.nome);
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>     
            
            <Link to="/">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;