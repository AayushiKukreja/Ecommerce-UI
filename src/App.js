import React from 'react';
import './App.css';
import Home from './Home'  ;
import Header from './Header' ;
import Checkout from './Checkout' ;
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom' ;
function App() {
    return (
   <div>
   <Header />
   <Router>
   <Routes>
    <Route exact path='/' element={<Home/> }   />
    <Route exact path='/checkout' element={<Checkout/> }   />

   </Routes>
    </Router>
    </div> )
}
export default App;
