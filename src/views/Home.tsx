import { Component } from 'react';
import { getSearchResults } from '../services/api';
import SearchBar from '../components/searchBar/SearchBar';
import Card from '../components/card/Card';

import { Character } from '../types/api';

interface HomeState {
  searchValue: string;
  results: Character[];
  isLoading: boolean;
  throwError: boolean;
}

class Home extends Component<object, HomeState> {
  state = {
    searchValue: '',
    results: [],
    isLoading: false,
    throwError: false,
  };

  componentDidMount(): void {
    const searchValue = '';
    this.setState({ searchValue }, () => {
      this.performsearch(searchValue);
    });
  }

  performsearch = async (value: string) => {
    this.setState({ isLoading: true });
    try {
      const response = await getSearchResults(value);
      const results = response.results;
      console.log(results);
      if (Array.isArray(results)) {
        this.setState({ results });
      }
    } catch (error) {
      console.error(error);
      this.setState({ results: [] });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  inputchange = (newSearch: string) => {
    console.log(newSearch);
    this.performsearch(newSearch);
    this.setState({ searchValue: newSearch });
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
            {this.state.results.length > 0 ? (
              this.state.results.map((item, key) => (
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
