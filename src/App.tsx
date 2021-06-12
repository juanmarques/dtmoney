import React from "react";
import {useState} from 'react'
import Modal from 'react-modal'
import {Dashboard} from "./components/Dashboard";
import {Header} from "./components/Header";
import {NewTransactionModal} from "./components/NewTransactionModal";
import {GlobalStyle} from "./styles/global";
import {TransactionProvider} from "./TransactionsContext"

Modal.setAppElement('#root')// por questao de acessibilidade 

export function App() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); //criando estado,o primeiro e o estado,o segundo quando muda ele

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }


    return (
        <TransactionProvider>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

            <Dashboard/>

            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />

            <GlobalStyle/>

        </TransactionProvider>
    );
}