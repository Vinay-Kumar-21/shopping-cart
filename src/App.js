import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>


          <Route path='/' element={<Home />}></Route>

          <Route path='/cart' element={<Cart />}></Route>

        </Routes>


        <Cart />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
