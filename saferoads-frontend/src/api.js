import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchReports = () => API.get('/reports');
export const createReport = (report) => API.post('/reports', report);
