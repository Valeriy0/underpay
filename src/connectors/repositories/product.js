import { requestApi } from '../api';
import { BaseRepository } from './base';

class Repository extends BaseRepository {
  getProducts = (params) => requestApi('get', `${this.path}`, params);
}

export const ProductsRepository = new Repository('/products');
