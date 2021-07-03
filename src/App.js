import './App.css';
import NavBar from './Components/NavBar';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Products from './Components/Products';
import About from './Components/About'
import Error from './Components/Error';
import Product from './Components/Product'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={Product} />
        <Route path="/about" component={About} />
        <Route path="/*" component={Error} />

      </Switch>
    </div>
  );
}

export default App;
