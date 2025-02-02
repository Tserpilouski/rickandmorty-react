import { Component } from 'react';
import Home from './views/Home';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    );
  }
}

export default App;
