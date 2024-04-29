import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/type1' element={<ShopCategory category="type1" />}/>
        <Route path='/type2' element={<ShopCategory category="type1" />}/>
        <Route path='/type3' element={<ShopCategory category="type1"/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
