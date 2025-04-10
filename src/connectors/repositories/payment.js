import { requestApi } from '../api';
import { BaseRepository } from './base';

class Repository extends BaseRepository {
    createOrder = (params) => requestApi('post', `${this.path}/create`, params);
}

export const PaymentRepository = new Repository('/payment');
