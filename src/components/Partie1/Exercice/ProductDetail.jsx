import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
`;

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <Container>Product not found</Container>;
  }

  return (
    <Container>
      <Card>
        <h2>Product Details</h2>
        <p><strong>ID:</strong> {product.id}</p>
        <p><strong>Libellé:</strong> {product.libelle}</p>
        <p><strong>Code:</strong> {product.code}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <Button onClick={() => navigate('/products')}>Back to Products</Button>
      </Card>
    </Container>
  );
}