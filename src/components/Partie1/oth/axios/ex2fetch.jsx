import  { useState, useEffect } from "react";

export default function EX2F() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    Promise.all([
      fetch("https://fakestoreapi.com/products/categories").then(res => res.json()),
      fetch("https://fakestoreapi.com/products").then(res => res.json())
    ]).then(([cats, prods]) => {
      setCategories(cats);
      setProducts(prods);
    });
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h1>Magasin</h1>

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