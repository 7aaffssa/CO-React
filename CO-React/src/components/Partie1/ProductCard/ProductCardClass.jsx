import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { product, children } = this.props;
    return (
      <div className="product-card">
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        {children}
      </div>
    );
  }
}

export default ProductCard;