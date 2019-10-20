import { ResourceStore } from '@reststate/mobx';
import api from '../services';

const fetchStore = new ResourceStore({
    name: 'fetchData',
    httpClient: api,
});

const pushStore = new ResourceStore({
    name: 'storeData',
    httpClient: api,
});

export {
    fetchStore,
    pushStore
};