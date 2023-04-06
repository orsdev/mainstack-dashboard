import { fetcher } from '@/config';
import { useQuery } from 'react-query';
import { GraphDataProps } from './types';

export const useGraphData = () => {
  const { isLoading, error, data } = useQuery<GraphDataProps>({
    queryKey: 'graph-data',
    queryFn: async () => {
      return await fetcher({
        method: "GET",
        url: "/",
      })
    },

  })

  return {
    isLoading,
    error,
    data
  }
}