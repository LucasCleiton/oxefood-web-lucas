import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import axios from "axios";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, Radio } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';



export default function FormConfiguracao() {


    const { state } = useLocation();
    const [idConfiguracao, setIdConfiguracao] = useState();


    const [nomeEmpresa, setNomeEmpresa] = useState();
    const [cnpj, setCnpj] = useState();
    const [site, setSite] = useState();
    const [emailContato, setEmailContato] = useState();
    const [tempoMinimoAgendamentoPedidos, setTempoMinimoAgendamentoPedidos] = useState();
    const [ligarAceitePedidos, setLigarAceitePedidos] = useState();
    const [dataEntradaSistema, setDataEntradaSistema] = useState();




    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/configuracaosistema/" + state.id)
                .then((response) => {
                    setIdConfiguracao(response.data.id)

                    setNomeEmpresa(response.data.nomeEmpresa)
                    setCnpj(response.data.cnpj)
                    setSite(response.data.site)
                    setEmailContato(response.data.emailContato)
                    setTempoMinimoAgendamentoPedidos(response.data.tempoMinimoAgendamentoPedidos)

                    setLigarAceitePedidos(response.data.ligarAceitePedidos)
                    setDataEntradaSistema(formatarData(response.data.dataEntradaSistema))



                })
        }
    }, [state])




    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    function salvar() {

        let configuracaoRequest = {

            nomeEmpresa: nomeEmpresa,
            cnpj: cnpj,
            site: site,
            emailContato: emailContato,
            tempoMinimoAgendamentoPedidos: tempoMinimoAgendamentoPedidos,
            ligarAceitePedidos: ligarAceitePedidos,
            dataEntradaSistema: dataEntradaSistema

        }

        if (idConfiguracao != null) { //Alteração:
            axios.put("http://localhost:8080/api/configuracaosistema/" + idConfiguracao, configuracaoRequest)
                .then((response) => { console.log('Configuracao alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alterara a Configuracao.') })
        } else { //Cadastro:
            axios.post("http://localhost:8080/api/configuracaosistema", configuracaoRequest)
                .then((response) => { console.log('Configuracao cadastrado com sucesso.') })
                .catch((error) => { console.log('Erro ao incluir a Configuracao.') })
        }
    }



    return (

        <div>
            <MenuSistema tela={'confiugracao'} />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    {idConfiguracao === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Configuracao &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idConfiguracao != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Configuracao &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>






                                <Form.Input
                                    required
                                    fluid
                                    label='Nome Empresa'
                                    maxLength="100"
                                    value={nomeEmpresa}
                                    onChange={e => setNomeEmpresa(e.target.value)}

                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CNPJ'>
                                    <InputMask
                                        required
                                        mask=""
                                        value={cnpj}
                                        onChange={e => setCnpj(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>


                                <Form.Input


                                    fluid
                                    label='Site'
                                    width={6}>
                                    <InputMask
                                        mask=""
                                        value={site}
                                        onChange={e => setSite(e.target.value)}
                                    />
                                </Form.Input>






                                <Form.Input
                                    fluid
                                    label='E-mail de Contato'
                                    width={6}>
                                    <InputMask
                                        mask=""
                                        value={emailContato}
                                        onChange={e => setEmailContato(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Tempo minimo de Pedido'
                                    width={6}>
                                    <InputMask
                                        mask=""
                                        value={tempoMinimoAgendamentoPedidos}
                                        onChange={e => setTempoMinimoAgendamentoPedidos(e.target.value)}
                                    />
                                </Form.Input>




                                <Form.Group>
                                    <Form.Field>
                                        <label>ligar Aceite de Pedidos:</label>
                                        <Radio
                                            label='Sim'
                                            name='ligarAceitePedidos'
                                            value='sim'
                                            checked={ligarAceitePedidos === 'True'}
                                            onChange={() => setLigarAceitePedidos('True')}

                                        />
                                        <Radio
                                            label='Não'
                                            name='ligarAceitePedidos'
                                            value='nao'
                                            checked={ligarAceitePedidos === 'False'}
                                            onChange={() => setLigarAceitePedidos('False')}

                                        />
                                    </Form.Field>
                                </Form.Group>

                                <Form.Input
                                    fluid
                                    label='Data de Entrada no Sistema'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataEntradaSistema}
                                        onChange={e => setDataEntradaSistema(e.target.value)}

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
                                <Link to={'/list-configuracao'}>Voltar</Link>
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
            </div>
        </div>

    );

}
