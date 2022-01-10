import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Work from './containers/Work';

function App () {
  return (
    <div className="App">
      <NavBar />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
