import { requestApi } from '../api';
import { BaseRepository } from './base';

class Repository extends BaseRepository {
    createOrder = (params) => requestApi('post', `${this.path}/create`, params);
    getHistory = (params) => requestApi('get', `${this.path}/history`, params);
    getProviders = () => requestApi('get', `${this.path}/providers`);
}

export const PaymentsRepository = new Repository('/payments');
