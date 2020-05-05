import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000',
});

// PlaceHolder pra rota da API
//export const place_holder = async (text) => {
//    return await api.post('/post', { userText: text });
//};
