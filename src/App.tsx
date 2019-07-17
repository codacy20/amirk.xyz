import React from 'react';
import './App.css';
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
