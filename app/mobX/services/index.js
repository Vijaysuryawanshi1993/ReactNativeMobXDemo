import axios from 'axios';

const token = '[the token you received from the POST request above]';

const httpClient = axios.create({
  baseURL: 'https://sandboxapi.reststate.org/',
  headers: {
    'Content-Type': 'application/vnd.api+json',
    Authorization: `Bearer ${token}`,
  },
});

export default httpClient