import Axios, { AxiosResponse } from 'axios';

const URL = `https://posts-test-sting.vercel.app/api`;

export const getData = async (): Promise<AxiosResponse> => {
  return await Axios.get(URL);
};
