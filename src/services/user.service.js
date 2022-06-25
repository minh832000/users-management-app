import httpClient from './http.service';

const userAPI = {
  index: async () => await httpClient.get('/users'),
  get: async (id) => await httpClient.get('/users/', { params: { id } }),
  create: async (dt) => await httpClient.post('/users', dt),
  update: async (dt) => await httpClient.put(`/users/${dt.id}`, dt),
  delete: async (id) => await httpClient.delete(`/users/${id}`),
};

export default userAPI;
