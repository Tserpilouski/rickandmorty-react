import React, { Component } from 'react';
import { getSearchResults } from '../services/api';
import Button from '../components/button/Button';
import Input from '../components/input/Input';

interface HomeState {
  searchValue: string;
  results: any[];
  isLoading: boolean;
  throwError: boolean;
}

class Home extends Component<HomeState> {
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
      if (Array.isArray(results)) {
        this.setState({ results });
      }
    } catch (error) {
      console.error('Failed to fetch items:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  showConsole = () => {
    console.log(this.state.searchValue);
  };

  inputchange = (newSearch: string) => {
    this.setState({ searchValue: newSearch });
  };

  render(): React.ReactNode {
    return (
      <>
        <div>
          <h1>Main page</h1>
          <Input onChange={this.inputchange} value={this.state.searchValue} />
          <Button action={this.showConsole} name="Hello" />
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
