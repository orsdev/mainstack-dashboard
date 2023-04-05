import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.BASE_ENDPOINT,
  timeout: 50000, // 50 seconds
})
