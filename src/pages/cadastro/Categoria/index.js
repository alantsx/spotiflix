import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: 'Categoria Inicial',
        descricao: 'Descrição Inicial',
        cor: '#000',
    }

    const [values, setValues] = useState(valoresIniciais);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([...categorias, setValues]);
            }}>
                <div>
                    <label>
                        Nome da Categoria:
                        <input
                            type="text"
                            value={values.nome}
                            onChange={function handleCategoria(props) {
                                // setValues(props.target.value);
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={values.descricao}
                            onChange={function handleCategoria(props) {
                                // setValues(props.target.value);
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Cor:
                        <input
                            type="color"
                            value={values.cor}
                            onChange={function handleCategoria(props) {
                                // setNomeDaCategoria(props.target.value);
                            }}
                        />
                    </label>
                </div>

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria}
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