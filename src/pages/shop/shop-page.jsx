import React, { Component } from "react";
import { connect } from "react-redux";
import "./shop-page.css";
import { Route } from "react-router-dom";
import ShopOverview from "../../components/shop-overview/shop-overview";
import CollectionPage from "../collection-page/collection";
import {
  firestore,
  convertCollectionSnapShotToMap,
} from "../../firebase/firebase";
import { updateCollection } from "../../redux/shop/shop-action";

import WithSpinner from "../../components/with-spiner/with-spiner";

// SPINNER VARIABLE START

const ShopOverviewWithSpinner = WithSpinner(ShopOverview);
const CollectionPageWithSpinnser = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionMap = convertCollectionSnapShotToMap(snapShot);

        updateCollection(collectionMap);

        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <ShopOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />

        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinnser isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionMap) =>
    dispatch(updateCollection(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
