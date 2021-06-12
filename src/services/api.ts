//services aqui usamos como servicos de dados(banco de dados,api externa...)

import axios from 'axios';//baixamos o axios para n precisar ficar usando o fetch

export const api = axios.create({ //criando uma instancia
  baseURL: 'http://localhost:3000/api',
})