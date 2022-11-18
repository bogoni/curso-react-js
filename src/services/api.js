import axios from 'axios';
import configureMock from './configureMock';

const mockRequest = false;

const baseURL = 'https://professorfeijo.com.br/tt/api-php';

const api = axios.create({
    baseURL
});

if (mockRequest){//
    configureMock(api)
}
export default api;