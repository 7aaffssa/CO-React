import { useState, useEffect } from "react";
import axios from "axios";

export default function EX2A() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    Promise.all([
      axios.get("https://fakestoreapi.com/products/categories"),
      axios.get("https://fakestoreapi.com/products")
    ]).then(([categoriesResponse, productsResponse]) => {
      setCategories(categoriesResponse.data);
      setProducts(productsResponse.data);
    });
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h1>Magasin Axios</h1>

      <ul>
        <li onClick={() => setSelectedCategory("")}>Toutes</li>
        {categories.map(cat => (
          <li key={cat} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </li>
        ))}
      </ul>

      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <li key={product.id}>
              {product.title} - ${product.price}
            </li>
          ))
        ) : (
          <p>Aucun produit trouvé.</p>
        )}
      </ul>
    </div>
  );
}