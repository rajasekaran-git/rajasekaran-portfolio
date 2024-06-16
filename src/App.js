import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js' 

import Home from './components/home';
import Header from './components/header';
import About from './components/about-us';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import {Route, Routes} from 'react-router-dom'
import $ from 'jquery';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/portfolio' Component={Portfolio} />
          <Route path='/contact' Component={Contact} />
        </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
