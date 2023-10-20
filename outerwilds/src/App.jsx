import './style.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Banner from './components/Banner/Banner'
import Categories from './components/categories/Categories'
import Footer from './components/Footer/Footer'
import ProductList from './components/products/ProductList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CategoriesProductList from './components/categories/CategoriesProductList'
import YoutubeTrailerIframe from './components/YoutubeTrailerIframe.jsx/YoutubeTrailerIframe'
import CartProvider, { CartContext } from './context/CartContext'
import Cart from './components/Cart/Cart'



function App() {    
  const bienvenidos="Bienvenidos!"
  return (
    <>
      <CartProvider>
      <Router>
        <Navbar />                
        <Banner />                       
        <Routes>
          <Route exact path="/" element={<><ItemListContainer bienvenidos={bienvenidos}/><YoutubeTrailerIframe embedId="ZKJUMMCJvGM"/></>} />
          <Route exact path="/categories" element={<Categories/>} />
          <Route exact path="/products" element={<><Categories/><ProductList/></>} />   
          <Route exact path="/categories/:categoryId" element={<><Categories/><CategoriesProductList/></>}/>  
          <Route exact path="/cart" element={<Cart />} />     
        </Routes> 
        <Footer />        
      </Router>
      </CartProvider>       
    </>
  )
}
export default App
