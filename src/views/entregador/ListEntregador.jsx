import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Modal, Header, Image } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListEntregador() {

    const [lista, setLista] = useState([]);
    const [openModalRemover, setOpenModalRemover] = useState(false);
    const [openModalDetalhes, setOpenModalDetalhes] = useState(false);
    const [idRemover, setIdRemover] = useState();
    const [entregadorSelecionado, setEntregadorSelecionado] = useState(null);

    function confirmaRemover(id) {
        setOpenModalRemover(true);
        setIdRemover(id);
    }

    function verRegistro(id) {
        const entregador = lista.find(item => item.id === id);
        setEntregadorSelecionado(entregador);
        setOpenModalDetalhes(true);
    }

    async function remover() {
        await axios.delete(`http://localhost:8080/api/entregador/${idRemover}`)
            .then(() => {
                console.log('Entregador removido com sucesso.');
                carregarLista();
            })
            .catch(() => {
                console.log('Erro ao remover um Entregador.');
            });
        setOpenModalRemover(false);
    }

    useEffect(() => {
        carregarLista();
    }, []);

    function carregarLista() {
        axios.get("http://localhost:8080/api/entregador")
            .then(response => setLista(response.data));
    }

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    return (
        <div>
            <MenuSistema tela={'entregador'} />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified'>
                    <h2> Entregador </h2>
                    <Divider />
                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-entregador'
                        />
                        <br /><br /><br />

                        <Table color='orange' sortable celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nome</Table.HeaderCell>
                                    <Table.HeaderCell>CPF</Table.HeaderCell>
                                    <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                                    <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                                    <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {lista.map(entregador => (
                                    <Table.Row key={entregador.id}>
                                        <Table.Cell>{entregador.nome}</Table.Cell>
                                        <Table.Cell>{entregador.cpf}</Table.Cell>
                                        <Table.Cell>{formatarData(entregador.dataNascimento)}</Table.Cell>
                                        <Table.Cell>{entregador.foneCelular}</Table.Cell>
                                        <Table.Cell>{entregador.foneFixo}</Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            <Button
                                                inverted
                                                circular
                                                color='blue'
                                                title='Clique aqui para ver registro'
                                                icon
                                                onClick={() => verRegistro(entregador.id)}>
                                                <Icon name='circle' />
                                            </Button>
                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste Entregador'
                                                icon>
                                                <Link to="/form-entregador" state={{ id: entregador.id }} style={{ color: 'green' }}>
                                                    <Icon name='edit' />
                                                </Link>
                                            </Button>
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este Entregador'
                                                icon
                                                onClick={() => confirmaRemover(entregador.id)}>
                                                <Icon name='trash' />
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>

            {/* Modal para confirmar remoção */}
            <Modal
                basic
                onClose={() => setOpenModalRemover(false)}
                open={openModalRemover}
            >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModalRemover(false)}>
                        <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={remover}>
                        <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>

            {/* Modal para exibir detalhes do entregador */}
            <Modal
                onClose={() => setOpenModalDetalhes(false)}
                open={openModalDetalhes}
            >
                <Header icon>

                    Dados do Entregador
                </Header>

                {entregadorSelecionado && (
                    <Modal.Content>
                        <p><strong>Nome:</strong> {entregadorSelecionado.nome}</p>
                        <p><strong>CPF:</strong> {entregadorSelecionado.cpf}</p>
                        <p><strong>Data de Nascimento:</strong> {formatarData(entregadorSelecionado.dataNascimento)}</p>
                        <p><strong>Fone Celular:</strong> {entregadorSelecionado.foneCelular}</p>
                        <p><strong>Fone Fixo:</strong> {entregadorSelecionado.foneFixo}</p>
                    </Modal.Content>
                )}
                <Modal.Actions>
                    <Button color='red' inverted onClick={() => setOpenModalDetalhes(false)}>
                        <Icon name='remove' /> Fechar
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
}
