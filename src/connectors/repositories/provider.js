import { requestApi } from '../api';
import { BaseRepository } from './base';

class Repository extends BaseRepository {
    getProviders = (params) => requestApi('get', `${this.path}`, params);
}

export const ProviderRepository = new Repository('/providers');
