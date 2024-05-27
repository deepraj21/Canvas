import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import banner from './Components/Assets/images/banner.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Cotton' element={<ShopCategory banner={banner} category="Cotton" />}/>
        <Route path='/Linen' element={<ShopCategory banner={banner} category="Linen" />}/>
        <Route path='/Stretched' element={<ShopCategory banner={banner} category="Stretched"/>}/>
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />}/>
        </Route>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<LoginSignup />}/>
        <Route path='/*' element={<h1>error</h1>} />
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
