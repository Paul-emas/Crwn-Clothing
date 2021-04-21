import React from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  componentDidMount() {
    console.log(this.state.collections);
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...items }) => (
          <CollectionPreview key={id} {...items} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
