import { Component } from 'react';
import HomePage from './Pages/HomePage/HomePage';

 class App extends Component {
  title = 'Welcome to my blog';

  render() {
      return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;