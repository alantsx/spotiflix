import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };

    const { values, handleCategoria, clearForm } = useForm(valoresIniciais); 

    const [categorias, setCategorias] = useState([]);

    useEffect(() => { 
        const URL = window.location.hostname.includes('localhost') ?
        'http://localhost:8080/categorias' :
        'https://alan-spotiflix.herokuapp.com/categorias';
        fetch(URL)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            })
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([...categorias, values]);
                clearForm(valoresIniciais);
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
                    type="textarea"
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

                <Button>
                    Cadastrar
                </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}
            
            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria.titulo}${index}`}>
                            {categoria.titulo}
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