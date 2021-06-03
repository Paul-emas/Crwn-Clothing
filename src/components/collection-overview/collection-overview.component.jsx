import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection-overview.style.scss';

import { selectShopCollectionPreview } from '../../redux/shop/shop-selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collection-preview">
      {collections.map(({ id, ...items }) => (
        <CollectionPreview key={id} {...items} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
