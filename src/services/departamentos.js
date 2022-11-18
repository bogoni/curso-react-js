import api from './api';

const headers = {
    'Authorization' : 'Bearer PROCEMPA'
}

export const getDepartamentos = async () => {

    const resp = await api.get('/departamentos/', { headers });
    return resp.data;
}

export const getDepartamento = async (id) => {
    const resp = await api.get('/departamentos/', { headers });
    return resp.data;
}

export const postDepartamento = async ({ nome, sigla }) => {
    const body = new FormData();
    body.append('nome', nome);
    body.append('sigla', sigla);
    const resp = await api.post('/departamentos/', body, { headers });
    return true;
}