import axios from 'axios';

const BASE_REST_API_URL = "http://localhost:8080/api/tasks";

const axiosInstance = axios.create({
  baseURL: BASE_REST_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllTasks = (currentPage, pageSize) =>
  axiosInstance.get('/get-all-task', { params: { page: currentPage - 1, size: pageSize } });

export const getAllTasksByTitle = (currentPage, pageSize, key) =>
  axiosInstance.get(`/get-all-task-by-title/${key}`, { params: { page: currentPage - 1, size: pageSize } });

export const saveTask = (task) =>
  axiosInstance.post('/add-task', task);

export const updateTask = (id, task) =>
  axiosInstance.put(`/update-task/${id}`, task);

export const getTaskById = (id) =>
  axiosInstance.get(`/get-task/${id}`);

export const deleteTaskById = (id) =>
  axiosInstance.delete(`/delete-task/${id}`);
