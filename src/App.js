import { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop-page";
import Header from "./components/header/header";
import CheckoutPage from "./pages/checkout-page/checkout-page";
import Footer from "./components/footer/footer";
import SigninSignupPage from "./pages/signin-signup/signin-signup";
import { auth, createUserProfeleDoc } from "./firebase/firebase";
import { setCurrentUser } from "./redux/user/user-action";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selector";
// import { addCollectionAndDoc } from "./firebase/firebase";
// import { selectorForShopCollections } from "./redux/shop/shop-selector";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfeleDoc(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      // this.setState({currentUser : userAuth});

      setCurrentUser(userAuth);

      // addCollectionAndDoc(
      //   "collections",
      //   collectionArray.map(({ title, items }) => ({
      //     title,
      //     items,
      //   }))
      // );
    });
  }

  render() {
    return (
      <div className="app">
        <Header className="head-1" />
        <Switch className="body">
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SigninSignupPage />
              )
            }
          />
        </Switch>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  // collectionArray: selectorForShopCollections(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
