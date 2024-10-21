import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Radio } from 'semantic-ui-react';

export default function FormCliente() {

    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                ></Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='RG'>
                                    <InputMask

                                        mask=""
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask

                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}
                                >
                                    <InputMask

                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}
                                >
                                    <InputMask

                                    />
                                </Form.Input>



                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={6}
                                >
                                    <InputMask

                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={6}
                                >
                                    <InputMask

                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={6}
                                >
                                    <InputMask

                                    />
                                </Form.Input>


                            </Form.Group>
                            <Form.Group>
                                <div class="ui form">
                                    <div class="field">
                                        <label>UF</label>
                                        <select multiple="" class="ui dropdown">
                                            <option value="">Selecione o Estado</option>
                                            <option value="AC">Acre</option>
                                            <option value="AL">Alagoas</option>
                                            <option value="AP">Amapá</option>
                                            <option value="AM">Amazonas</option>
                                            <option value="BA">Bahia</option>
                                            <option value="CE">Ceará</option>
                                            <option value="DF">Distrito Federal</option>
                                            <option value="ES">Espírito Santo</option>
                                            <option value="GO">Goiás</option>
                                            <option value="MA">Maranhão</option>
                                            <option value="MT">Mato Grosso</option>
                                            <option value="MS">Mato Grosso do Sul</option>
                                            <option value="MG">Minas Gerais</option>
                                            <option value="PA">Pará</option>
                                            <option value="PB">Paraíba</option>
                                            <option value="PR">Paraná</option>
                                            <option value="PE">Pernambuco</option>
                                            <option value="PI">Piauí</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="RN">Rio Grande do Norte</option>
                                            <option value="RS">Rio Grande do Sul</option>
                                            <option value="RO">Rondônia</option>
                                            <option value="RR">Roraima</option>
                                            <option value="SC">Santa Catarina</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="TO">Tocantins</option>
                                        </select>
                                    </div>
                                </div>

                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={6}
                                >
                                    <InputMask

                                    />
                                </Form.Input>



                            </Form.Group>

                            <Form.Group>
                                <Form.Field>
                                    <label>Ativo : </label>

                                    <Radio
                                        label='Sim'
                                        name=''
                                        value=''
                                    />

                                    <Radio
                                        label='Não'
                                        name=''
                                        value=''
                                    />

                                </Form.Field>

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
