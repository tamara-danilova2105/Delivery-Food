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


function App() {
  return (
    <Router>
    <nav className='navbar'>
      <Link to='/' className='bestpizza'><img src={logo} width='45px' alt='BEST PIZZA'/> BEST PIZZA</Link>
      <Link to='/discounts' className='delivery'>АКЦИИ</Link>
      <Link to='/recipes' className='delivery'>РЕЦЕПТЫ</Link>
      <Link to='/contacts' className='delivery'>КОНТАКТЫ</Link>
      <button className='btnBasket'>КОРЗИНА</button>
    </nav>

    <Routes>
      <Route path='/' element={ <HomePage/> }></Route>
      <Route path='/discounts' element={ <Discounts/> }></Route>
      <Route path='/recipes' element={ <Recipes /> }></Route>
      <Route path='/contacts' element={ <Contacts/> }></Route>
    </Routes>
    </Router>
  );
}

export default App;
