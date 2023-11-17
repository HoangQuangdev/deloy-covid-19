import axios, { AxiosResponse, AxiosError } from 'axios';

interface RequestParams {
  [key: string]: unknown;
}

interface RequestData {
  data: unknown;
  status: number;
}

interface HandleDataFunction {
  (data: RequestData | AxiosResponse | AxiosError): void;
}

export const GET_DATA = (
  Url: string,
  handleData: HandleDataFunction,
  params: RequestParams = {},
  // token: string | false = false
): void => {
  axios
    .get(Url, {
      params: { ...params },
      headers: {
        'Content-Type': 'application/json',
        // Authorization: token ? `Bearer ${token}` : '',
      },
      maxBodyLength: Infinity,
    })
    .then((res: AxiosResponse) => {
      const obj: RequestData = {
        data: res.data,
        status: res.status,
      };
      handleData(obj);
    })
    .catch((e: AxiosError) => {
      handleData(e.response as AxiosResponse);
    });
};

export const POST_JSON = (
  Url: string,
  Data: unknown,
  handleData: HandleDataFunction,
  token: string | false = false,
  params: RequestParams = {}
): void => {
  axios
    .post(Url, Data, {
      params: { ...params },
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },
    })
    .then((res: AxiosResponse) => {
      const obj: RequestData = {
        data: res.data,
        status: res.status,
      };
      handleData(obj);
    })
    .catch((e: AxiosError) => {
      handleData(e.response as AxiosResponse);
    });
};

export const POST_FORM = (
  Url: string,
  Data: unknown,
  handleData: HandleDataFunction,
  token: string | false = false,
  params: RequestParams = {}
): void => {
  axios
    .post(Url, Data, {
      params: { ...params },
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res: AxiosResponse) => {
      const obj: RequestData = {
        data: res.data,
        status: res.status,
      };
      handleData(obj);
    })
    .catch((e: AxiosError) => {
      handleData(e.response as AxiosResponse);
    });
};
