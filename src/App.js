
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import {Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
    <Navbar/>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
