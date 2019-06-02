import React from 'react';
import './style.scss';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../pages/Home';
import Counter from '../Counter';


function App() {

  

  return (
    <div className="App">
     <Header />
     <Counter />
     <Home />
     <Footer />
    
    </div>
  );
}

export default App;

