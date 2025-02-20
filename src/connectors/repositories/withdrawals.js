import { requestApi } from '../api';
import { BaseRepository } from './base';

class Repository extends BaseRepository {
  searchItem = (params) => requestApi('get', `${this.path}/search`, {itemName: params});
  getProducts = (count, params) => requestApi('get', `${this.path}/product-list/${count}`, params);
}

export const WithdrawalsRepository = new Repository('/withdrawals');
