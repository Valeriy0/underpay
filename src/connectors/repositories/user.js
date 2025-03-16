import { requestApi } from '../api';
import { BaseRepository } from './base';

class Repository extends BaseRepository {
  getProfile = (params) => requestApi('get', `${this.path}/me`, params);
}

export const UserRepository = new Repository('/users');
