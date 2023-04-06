import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://fe-task-api.mainstack.io',
  timeout: 50000, // 50 seconds
})
