import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Radio } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormCliente() {
    // Estado para controlar o valor selecionado do Radio
    const [ativo, setAtivo] = useState('');

    const handleRadioChange = (e, { value }) => {
        setAtivo(value);
    };

    return (
        <div>
            <MenuSistema tela={'Entregador'} />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified'>
                    <h2>
                        <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro
                    </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                />
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
                                />
                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={6}
                                />
                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={6}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={6}
                                />
                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={6}
                                />
                                <Form.Input
                                    fluid
                                    label='CEP'
                                    width={6}
                                />
                            </Form.Group>

                            <Form.Group>
                                <div className="ui form">
                                    <div className="field">
                                        <label>UF</label>
                                        <select className="ui dropdown">
                                            <option value="">Selecione o Estado</option>
                                            {/* ... outras opções ... */}
                                        </select>
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={6}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Field>
                                    <label>Ativo:</label>
                                    <Radio
                                        label='Sim'
                                        name='ativo'
                                        value='sim'
                                        checked={ativo === 'sim'}
                                        onChange={handleRadioChange}
                                    />
                                    <Radio
                                        label='Não'
                                        name='ativo'
                                        value='nao'
                                        checked={ativo === 'nao'}
                                        onChange={handleRadioChange}
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
            </div>
        </div>
    );
}
