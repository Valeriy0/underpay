import { requestApi } from '../api';
import { BaseRepository } from './base';

class Repository extends BaseRepository {
  getBanners = (params) => requestApi('get', `${this.path}`, params);
}

export const BannersRepository = new Repository('/banners');
