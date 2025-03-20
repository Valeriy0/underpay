import { requestApi } from '../api';
import { BaseRepository } from './base';

class Repository extends BaseRepository {
    createOrder = (params) => requestApi('get', `${this.path}`, params);
    getHistory = (params) => requestApi('post', `${this.path}/history`, params);
}

export const PaymentsRepository = new Repository('/payments');
