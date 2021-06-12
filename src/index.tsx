import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import {App} from './App';

createServer({

    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Churrascao',
                    amount: 12000,
                    category: 'entertainment',
                    type: 'withdraw',
                    createdAt: new Date('2021-02-12 09:00:00')
                },
                {
                    id: 2,
                    title: 'Fellowship',
                    amount: 150000,
                    category: 'dev',
                    type: 'deposit',
                    createdAt: new Date('2021-05-12 09:00:00')
                }
            ]
        })
    },

    routes() {
        this.namespace = 'api';//api que mencionei no fetch na index da transactonTable

        this.get('/transactions', () => { //quando houver uma requisicao de busca/listagem para a rota transactions
            return this.schema.all('transaction')
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)
            return schema.create('transaction', data)
        })
    }
})

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);