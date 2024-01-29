import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import Navbar1 from './Components/Navbar1/Navbar1';
import Logging from './Pages/Logging';
import Register from './Pages/Register';
import House from './Pages/House';
import About from './Pages/About';
import Blog from './Pages/Blog';
import ShopCategory from './Pages/ShopCategory';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar1/>
        <Routes>
        <Route path='/' element={<House/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Shop' element={<Shop/>} />
        <Route path='/Blog' element={<Blog/>} />
          <Route path='/Men' element={<ShopCategory  category='men' />}/>
          <Route path='/Women' element={<ShopCategory  category='women' />}/>
          <Route path='/Kids' element={<ShopCategory  category='kids' />}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Log-In' element={<Logging/>}/>
          <Route path='/Sing-Up' element={<Register/>}/>
        </Routes>
        <Footer/>      
      </BrowserRouter>

    </div>
  ); 
}

export default App;
