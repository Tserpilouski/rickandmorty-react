import Input from '../input/Input';
import Button from '../button/Button';
import { Component } from 'react';

interface SearchBarState {
  searchValue: string;
  createError: boolean;
}

interface SearchBarProps {
  action: (search: string) => void;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  state = {
    searchValue: '',
    createError: false,
  };

  componentDidUpdate(): void {
    if (this.state.createError) {
      throw new Error('Clicked Error Button');
    }
  }

  handleSearch = () => {
    this.props.action(this.state.searchValue);
  };

  inputChange = (newSearch: string) => {
    this.setState({ searchValue: newSearch });
  };

  render() {
    return (
      <div>
        <Input onChange={this.inputChange} value={this.state.searchValue} />
        <Button action={this.handleSearch} name="Search" />
        <button onClick={() => this.setState({ createError: true })}>
          Error
        </button>
      </div>
    );
  }
}

export default SearchBar;
