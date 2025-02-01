import React, { Component } from 'react';
import { getSearchResults } from '../services/api';

class Home extends Component {
  constructor(props: object) {
    super(props);
    this.state = {
      searchValue: '',
      results: [],
      isLoading: false,
      throwError: false,
    };
  }

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

  render(): React.ReactNode {
    return (
      <>
        <div>
          <h1>Main page</h1>
          <input type="text" />
          <button>Search</button>
        </div>
        <div>
          <h2>Results</h2>
          <div>
            <p>no results</p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
