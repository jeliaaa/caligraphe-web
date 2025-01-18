import axios from '../utils/axios';

export const get = async () => {
  const response = await axios.get(`/work/view`,);
  return response.data;
};
