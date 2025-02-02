import { Component } from 'react';
import { getSearchResults } from '../services/api';
import SearchBar from '../components/searchBar/SearchBar';
import Card from '../components/card/Card';

import { Character } from '../types/api';
import { getFromLocal } from '../components/hooks/localstorage';

interface HomeState {
  characters: Character[];
  isLoading: boolean;
  throwError: boolean;
}

class Home extends Component<object, HomeState> {
  state = {
    characters: [],
    isLoading: false,
    throwError: false,
  };

  componentDidMount(): void {
    const searchInput = getFromLocal('searchInput');
    if (searchInput) {
      this.performsearch(JSON.parse(searchInput));
    } else {
      this.performsearch('');
    }
  }

  performsearch = async (value: string) => {
    this.setState({ isLoading: true });
    try {
      const response = await getSearchResults(value);
      const results = response.results;
      if (Array.isArray(results)) {
        this.setState({ characters: results });
      }
    } catch (error) {
      console.error(error);
      this.setState({ characters: [] });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  inputchange = (search: string) => {
    this.performsearch(search);
  };

  render() {
    return (
      <>
        <div>
          <h1>Main page</h1>
          <SearchBar action={this.inputchange} />
        </div>
        <div>
          <h2>Results</h2>
          <div>
            {this.state.characters.length > 0 ? (
              this.state.characters.map((item, key) => (
                <Card key={key} item={item} />
              ))
            ) : (
              <p>sorry</p>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
