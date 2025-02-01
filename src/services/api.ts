export const getSearchResults = async (query: string) => {
  try {
    const url = query
      ? `https://rickandmortyapi.com/api/character/?name=${query}`
      : `https://rickandmortyapi.com/api/character`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Some problem with network');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('faild');
    throw error;
  }
};
