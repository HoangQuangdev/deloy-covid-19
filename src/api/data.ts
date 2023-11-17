import { GET_DATA } from './Fetch';

export const Api = {
  get_data: 'https://static.pipezero.com/covid/data.json',
};

export const getDataAPI = ( handleData: (res: unknown) => void): void => {
  GET_DATA(Api.get_data, (res) => {
    handleData(res);
  });
};
