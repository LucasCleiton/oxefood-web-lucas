import React from 'react';
import { Route, Routes } from "react-router-dom";


import Home from './views/home/Home';
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';

import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';


import FormCategoriaProduto from './views/produto/FormCategoriaProduto';
import ListCategoriaProduto from './views/produto/ListCategoriaProduto';

import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';

import FormConfiguracao from './views/configuracaosistema/FormConfiguracao';
import ListConfiguracao from './views/configuracaosistema/ListConfiguracao';



function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="form-cliente" element={<FormCliente />} />
                <Route path="list-cliente" element={<ListCliente />} />

                <Route path="form-produto" element={<FormProduto />} />
                <Route path="list-produto" element={<ListProduto />} />

                <Route path="form-categoria" element={<FormCategoriaProduto />} />
                <Route path="list-categoria" element={<ListCategoriaProduto />} />

                <Route path="form-entregador" element={<FormEntregador />} />
                <Route path="list-entregador" element={<ListEntregador />} />


                <Route path="form-configuracao" element={<FormConfiguracao />} />
                <Route path="list-configuracao" element={<ListConfiguracao />} />
            </Routes>
        </>
    )
}

export default Rotas
