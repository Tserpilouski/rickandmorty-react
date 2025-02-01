import React, { Component } from 'react';

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
