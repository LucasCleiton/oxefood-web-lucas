import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';



export default function FormCliente() {

    return (

        <div>
            <MenuSistema tela={'Produto'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="100"


                                >
                                    <InputMask
                                        required
                                        mask=""
                                        placeholder="Informe o titulo do produto"
                                    />

                                </Form.Input>


                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'>
                                    <InputMask
                                        required
                                        mask=""
                                        placeholder="Informe o código do produto"
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <div class="field">
                                    <label>Descrição</label>
                                    <textarea rows="2"></textarea>
                                </div>
                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label=' Valor Unitário'
                                    width={6}>
                                    <InputMask
                                        mask=""


                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Minimo em Minutos'
                                    width={6}>
                                    <InputMask
                                        mask=""
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={6}
                                >
                                    <InputMask
                                        mask=""
                                        maskChar={null}
                                        placeholder=""
                                    />
                                </Form.Input>

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
                                Voltar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
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
