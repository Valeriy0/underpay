import { requestApi } from '../api';
import { BaseRepository } from './base';

class Repository extends BaseRepository {
  getProducts = (params) => requestApi('get', `${this.path}`, params);
  getProductsWithCategory = (categoryId, params) => requestApi('get', `${this.path}/category/${categoryId}`, params);
  searchProducts = (params) => requestApi('get', `${this.path}/search`, params);
}

export const ProductsRepository = new Repository('/product');
