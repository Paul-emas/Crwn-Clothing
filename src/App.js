import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  auth,
  createUserProfileDocument,
} from './components/firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/users/user.selectors';
import { setCurrentUser } from './redux/users/user-action';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import SignInAndSignupPage from './pages/sign-and-signup-page/sign-and-signup-page.component';
import CheckOutPage from './pages/checkout/checkout.component';
import ShopPage from './pages/shop/shop.component';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const { setCurrentUser } = this.props;
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/signin"
            exact
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignupPage />
              )
            }
          />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" exact component={CheckOutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
