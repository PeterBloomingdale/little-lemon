import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />   {/* This might include your Nav with Links to different sections/pages */}
        <Main />     {/* This might include your Routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
