import axios from "axios";

export const getResults = () => {
  return axios.get(`http://localhost:3000/results`);
};

export const getJobs = () => {
  return axios.get(`http://localhost:3000/jobs`);
};

export const getData = (params = {}) => {
  return axios.get(`http://localhost:3000/data`, {
    params: {
      _page: params.page,
      _limit: params.limit,
    },
  });
};
