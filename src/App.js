import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>


        <Route path='/' element={<Home />}></Route>

        <Route path='/cart' element={<Cart />}></Route>

      </Routes>


      <Cart />
    </BrowserRouter>

  );
}

export default App;
