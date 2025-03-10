import { requestApi } from '../api';
import { BaseRepository } from './base';

class Repository extends BaseRepository {
  getTelegramCode = (params) => requestApi('get', `${this.path}/request`, params);
}

export const TelegramRepository = new Repository('/telegram');
