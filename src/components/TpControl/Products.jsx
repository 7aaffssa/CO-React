import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const Th = styled.th`
  background-color: #f8f9fa;
  padding: 0.75rem;
  border: 1px solid #dee2e6;
`;

const Td = styled.td`
  padding: 0.75rem;
  border: 1px solid #dee2e6;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => {
    switch(props.variant) {
      case 'add': return '#28a745';
      case 'delete': return '#dc3545';
      case 'update': return '#ffc107';
      default: return '#007bff';
    }
  }};
  color: ${props => props.variant === 'update' ? 'black' : 'white'};
`;

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    setProducts(storedProducts);
  }, []);

  const handleAdd = () => {
    const newProduct = {
      id: Date.now(),
      libelle: 'New Product',
      code: `CODE${Math.floor(Math.random() * 1000)}`,
      description: 'Product Description'
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleUpdate = (product) => {
    // Simple update with prompt (you might want to create a proper form)
    const newLibelle = prompt('Enter new libelle:', product.libelle);
    if (newLibelle) {
      const updatedProducts = products.map(p => 
        p.id === product.id ? { ...p, libelle: newLibelle } : p
      );
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
  };

  return (
    <Container>
      <Button variant="add" onClick={handleAdd}>Add Product</Button>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Libellé</Th>
            <Th>Code</Th>
            <Th>Description</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <Td onClick={() => navigate(`/product/${product.id}`)} style={{cursor: 'pointer'}}>
                {product.id}
              </Td>
              <Td>{product.libelle}</Td>
              <Td>{product.code}</Td>
              <Td>{product.description}</Td>
              <Td>
                <Button variant="delete" onClick={() => handleDelete(product.id)}>
                  Delete
                </Button>
                <Button variant="update" onClick={() => handleUpdate(product)}>
                  Update
                </Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}