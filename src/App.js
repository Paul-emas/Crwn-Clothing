import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from './components/header/header.component';
import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from './components/pages/shop/shop.component';
import Hats from './components/pages/hats/hats.components';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/shop/hats" exact component={Hats} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
