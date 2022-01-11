import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ProjectDetails from './containers/ProjectDetails';
import Work from './containers/Work';

function App () {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
