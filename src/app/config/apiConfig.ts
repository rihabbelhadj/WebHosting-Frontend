import {environment} from '../../environments/environment';

const apiUrl = environment.apiUrl;


export const apiConfig = {
  apis: {

    user: `${apiUrl}/Users`,

  },
};

