import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import InventoryPage from './components/InventoryPage/InventoryPage';
import Cart from './components/Cart/Cart';
import Marketing from './components/Marketing/Marketing';
import './App.css';

class App extends React.Component {
  render()
  {return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={LandingPage}/>
          <Route path='/shop' component={InventoryPage}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/thank-you' component={Marketing}/>
        </Switch>
      </BrowserRouter>         
    </div>
  );}
}

export default App;
