import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export const createUser = async (nome, dataNasc, email, telefone, cpf, senha, cidade, estado, pfp) => {
    return await api.post('/createuser', { nome, dataNasc, email, telefone, cpf, senha, cidade, estado, pfp });
};

export const login = async (email, senha) => {
    return await api.post('/login', { email, senha });
};

