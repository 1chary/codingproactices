import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import ProtectedRote from './components/ProtectedRoute'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRote exact path="/" component={Home} />
    <ProtectedRote exact path="/products" component={Products} />
    <ProtectedRote exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
)

export default App
