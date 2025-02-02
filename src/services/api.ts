import { ApiResponse } from '../types/api';

export const getSearchResults = async (query: string): Promise<ApiResponse> => {
  try {
    const url = query
      ? `https://rickandmortyapi.com/api/character/?name=${query}`
      : `https://rickandmortyapi.com/api/character`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('faild');
    throw error;
  }
};
