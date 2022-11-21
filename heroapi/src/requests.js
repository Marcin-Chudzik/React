import axios from 'axios';

const ACCESS_TOKEN = 2272569629586451;

export const getBasicHeroInfoById = id => {
    return axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}`);
};
