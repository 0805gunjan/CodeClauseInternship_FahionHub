import './App.css';

import Navbar from './Components/navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/shop'
import ShopCategory from './Pages/shopCategory';
import Product from './Pages/product';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import Footer from './Components/footer/footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kid' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}> 
         <Route path=':productId' element={<Product/>}/> 
        </Route>
        <Route path='/Cart' element={<Cart/>}/> 
        <Route path='/login' element={<LoginSignUp/>}/> 
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
