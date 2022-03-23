import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './HomePage';
import logo from './photo/logo.png'
import Discounts from './Discounts';
import Recipes from './Recipes';
import Contacts from './Contacts';
import Cart from './Cart';
import { useState } from "react"
import { data } from './data'


function App() {

  const [product, setProduct] = useState(data)

  const chosenFood = (category) => {
    const newFoodArray = data.filter(item => item.category === category)
    setProduct(newFoodArray)
}

  const [cart, setCart] = useState([])

  const addToCart = (id) => {
      if (!cart.find( element => element.id === id)){
          let temp = [...cart];
      
          product.forEach( item=> {
              if (item.id === id ) {
              const clikedProduct = {...item};
              temp.push(clikedProduct)
              }
          })
          setCart(temp);
          }
  }

  return (
    <Router>
    <nav className='navbar'>
      <Link to='/' className='bestpizza'><img src={logo} width='45px' alt='BEST PIZZA'/> BEST PIZZA</Link>
      <Link to='/discounts' className='delivery'>АКЦИИ</Link>
      <Link to='/recipes' className='delivery'>РЕЦЕПТЫ</Link>
      <Link to='/contacts' className='delivery'>КОНТАКТЫ</Link>
      <Link to='/cart' className='btnBasket'>КОРЗИНА</Link>
    </nav>

    <Routes>
      <Route path='/' element={ <HomePage product={product} addToCart={addToCart} chosenFood={chosenFood}/>}></Route>
      <Route path='/discounts' element={ <Discounts/> }></Route>
      <Route path='/recipes' element={ <Recipes /> }></Route>
      <Route path='/contacts' element={ <Contacts/> }></Route>
      <Route path='/cart' element={ <Cart cart={cart} setCart={setCart} /> }></Route>
    </Routes>
    </Router>
  );
}

export default App;
