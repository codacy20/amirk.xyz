import React from 'react';
import './App.css';
import Header from './Header'
import Main from './Main'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
}

export default App;
