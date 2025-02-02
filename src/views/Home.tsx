import { Component } from 'react';
import { getSearchResults } from '../services/api';
import SearchBar from '../components/searchBar/SearchBar';
import Card from '../components/card/Card';

interface HomeState {
  searchValue: string;
  results: any;
  isLoading: boolean;
  throwError: boolean;
}

class Home extends Component<object, HomeState> {
  state = {
    searchValue: '',
    results: null,
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
      if (Array.isArray(results)) {
        this.setState({ results });
      }
    } catch (error) {
      console.error('Failed to fetch items:', error);
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
            <p>no results</p>
            {this.state.results.map((item, key) => (
              <Card key={key} item={item} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
