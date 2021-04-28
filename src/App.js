import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./components/pages/homepage/homepage.component";
import SignInAndSignupPage from "./components/pages/sign-and-signup-page/sign-and-signup-page.component";
import ShopPage from "./components/pages/shop/shop.component";
import Hats from "./components/pages/hats/hats.components";
import { auth } from "./components/firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signin" exact component={SignInAndSignupPage} />
            <Route path="/shop" exact component={ShopPage} />
            <Route path="/shop/hats" exact component={Hats} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
