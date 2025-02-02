import Input from '../input/Input';
import Button from '../button/Button';
import { Component } from 'react';
import { getFromLocal } from '../hooks/localstorage';

interface State {
  searchValue: string;
  createError: boolean;
}

interface Props {
  action: (search: string) => void;
}

class SearchBar extends Component<Props, State> {
  state = {
    searchValue: '',
    createError: false,
  };

  componentDidMount(): void {
    this.setState({ searchValue: getFromLocal('searchInput') });
  }

  componentDidUpdate(): void {
    if (this.state.createError) {
      throw new Error('Clicked Error Button');
    }
  }

  handleSearch = () => {
    console.log(typeof this.state.searchValue);
    this.props.action(this.state.searchValue);
    localStorage.setItem('searchInput', JSON.stringify(this.state.searchValue));
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
