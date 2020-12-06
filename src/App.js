import Navbar from "./components/Navbar/index";
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./GlobalStyles";
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite' data={productData}/>
      <Feature/>
      <Products heading='Choose your dessert' data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
