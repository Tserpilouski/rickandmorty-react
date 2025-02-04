import { ApiResponse } from '../types/api';

class SearchService {
  async getSearchResults(query: string): Promise<ApiResponse> {
    try {
      const url = query
        ? `https://rickandmortyapi.com/api/character/?name=${query}`
        : `https://rickandmortyapi.com/api/character`;

      const response = await fetch(url);

      if (!response.ok) {
        const errorMessage = this.getErrorMessage(response.status);
        throw new Error(errorMessage);
      }

      const data: ApiResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      throw error;
    }
  }

  private getErrorMessage(status: number): string {
    if (status >= 400 && status < 500) {
      return `Ошибка клиента: ${status}. Проверьте введенные данные.`;
    } else if (status >= 500 && status < 600) {
      return `Ошибка сервера: ${status}. Пожалуйста, попробуйте позже.`;
    } else {
      return `Неизвестная ошибка: ${status}.`;
    }
  }
}

export const searchService = new SearchService();
