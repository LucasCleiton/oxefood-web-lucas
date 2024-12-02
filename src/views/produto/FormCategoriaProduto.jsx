import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import axios from "axios";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';



export default function FormCategoriaProduto() {

    const { state } = useLocation();
    const [idCategoriaProduto, setIdCategoriaProduto] = useState();
    const [descricao, setDescricao] = useState();




    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/categoriaproduto/" + state.id)
                .then((response) => {
                    setIdCategoriaProduto(response.data.id)
                    setDescricao(response.data.titulo)

                })
        }
    }, [state])

    function salvar() {

        let categoriaprodutoRequest = {
            descricao: descricao

        }


        if (idCategoriaProduto != null) { //Alteração:
            axios.put("http://localhost:8080/api/categoriaproduto/" + idCategoriaProduto, categoriaprodutoRequest)
                .then((response) => { console.log('Categoria alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alterar Categroia.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/categoriaproduto", categoriaprodutoRequest)
                .then((response) => { console.log('Categoria cadastrado com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir o Categoria.') })
        }

    }

    return (

        <div>
            <MenuSistema tela={'Categoria Produto'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >


                    {idCategoriaProduto === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idCategoriaProduto != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group>

                                <div class="field">
                                    <label>Descrição</label>
                                    <textarea rows="2"
                                        value={descricao}
                                        onChange={e => setDescricao(e.target.value)}></textarea>
                                </div>
                            </Form.Group>




                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-categoria'}>Voltar</Link>

                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div >
        </div >

    );

}
