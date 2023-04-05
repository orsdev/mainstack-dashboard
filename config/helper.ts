import { AxiosRequestConfig } from 'axios'
import { api } from './api'

export const fetcher = (options: AxiosRequestConfig) =>
  api({ ...options }).then((res: any) => res.data)