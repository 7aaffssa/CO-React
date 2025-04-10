function ProductCardFunction({ product, children }) {
    return (
      <div >
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        {children}
      </div>
    );
  }
  
  export default ProductCardFunction;