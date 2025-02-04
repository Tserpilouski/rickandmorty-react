import { Component } from 'react';
import { searchService } from '../services/api';
import SearchBar from '../components/searchBar/SearchBar';
import Card from '../components/card/Card';

import { Character } from '../types/api';
import { getFromLocal } from '../components/hooks/localstorage';

interface State {
  characters: Character[];
  isLoading: boolean;
  errorMessage: string | null;
}

class Home extends Component<object, State> {
  state = {
    characters: [],
    isLoading: false,
    errorMessage: null,
  };

  componentDidMount(): void {
    const searchInput = getFromLocal('searchInput');
    if (searchInput) {
      this.performsearch(searchInput);
    } else {
      this.performsearch('');
    }
  }

  performsearch = async (value: string) => {
    this.setState({ isLoading: true, errorMessage: null });
    try {
      const response = await searchService.getSearchResults(value);
      const results = response.results;

      if (Array.isArray(results)) {
        this.setState({ characters: results });
      } else {
        this.setState({ characters: [] });
      }
    } catch (error) {
      console.error('Ошибка при выполнении поиска:', error);
      if (error instanceof Error) {
        this.setState({ errorMessage: error.message });
      } else {
        this.setState({ errorMessage: 'Произошла неизвестная ошибка.' });
      }

      this.setState({ characters: [] });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  inputchange = (search: string) => {
    this.performsearch(search);
  };

  render() {
    const { characters, isLoading, errorMessage } = this.state;

    return (
      <>
        <div>
          <h1>Main page</h1>
          <SearchBar action={this.inputchange} />
        </div>
        <div>
          <h2>Results</h2>
          <div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              characters.map((item: Character) => (
                <Card item={item} key={item.id} />
              ))
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
