import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { INFO_API_ENDPOINT } from '../constants';

export const useInfoData = (path: string) => {
  return useSWR(`${INFO_API_ENDPOINT}${path}`, fetcher);
}