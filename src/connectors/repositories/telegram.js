import { requestApi } from '../api';
import { BaseRepository } from './base';

class Repository extends BaseRepository {
  auth = (params) => requestApi('post', `${this.path}/auth`, params);
}

export const TelegramRepository = new Repository('/api/telegram');
