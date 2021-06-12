import {createContext, ReactNode, useEffect, useState} from "react";
import {api} from "./services/api";
import {Transaction} from "./Transaction";


interface TransactionProviderProps {
    children: ReactNode;
}

interface TransanctionContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransanctionContextData>({} as TransanctionContextData);

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;


export function TransactionProvider({children}: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {

        await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        }).then(response => {

            const {transaction} = response.data;

            setTransactions([
                ...transactions,
                transaction
            ])
        });
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}