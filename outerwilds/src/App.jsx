import './style.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Banner from './components/Banner/Banner'
import Categories from './components/categories/Categories'
import ProductList from './components/products/ProductList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CategoriesProductList from './components/categories/CategoriesProductList'
import YoutubeTrailerIframe from './components/YoutubeTrailerIframe.jsx/YoutubeTrailerIframe'

function App() {   
    
  const bienvenidos="Bienvenidos!"
  return (
    <>
      <Router>
        <Navbar />
        <Banner />        
        <Routes>
          <Route exact path="/" element={<><ItemListContainer bienvenidos={bienvenidos}/><YoutubeTrailerIframe embedId="ZKJUMMCJvGM"/> </>} />
          <Route exact path="/categories" element={<Categories/>} />
          <Route exact path="/products" element={<><Categories/><ProductList/></>} />   
          <Route exact path="/categories/:categoryId" element={<><Categories/><CategoriesProductList/></>}/>       
        </Routes>         
      </Router>
    </>
  )
}
export default App
