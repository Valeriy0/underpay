import { requestApi } from '../api';
import { BaseRepository } from './base';

class Repository extends BaseRepository {
  getCategories = (params) => requestApi('get', `${this.path}`, params);
}

export const CategoriesRepository = new Repository('/categories');
