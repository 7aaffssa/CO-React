import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const Header = styled.div`
  background-color: #343a40;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-bottom: 2rem;
`;

const NavButton = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    background-color: white;
    color: #343a40;
  }
`;

function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    libelle: '',
    code: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!product.libelle || !product.code || !product.description) {
      alert('Please fill all fields');
      return;
    }

    const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
    
    const newProduct = {
      ...product,
      id: Date.now()
    };
    
    const updatedProducts = [...existingProducts, newProduct];
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    
    navigate('/products');
  };

  return (
    <>
      <Header>
        <div>Gestion des Produits</div>
        <div>
          <NavButton onClick={() => navigate('/products')}>Produits</NavButton>
          <NavButton onClick={() => navigate('/login')}>Déconnexion</NavButton>
        </div>
      </Header>
      <FormContainer>
        <h2>Ajouter un Produit</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Libellé"
            value={product.libelle}
            onChange={(e) => setProduct({...product, libelle: e.target.value})}
            required
          />
          <Input
            type="text"
            placeholder="Code"
            value={product.code}
            onChange={(e) => setProduct({...product, code: e.target.value})}
            required
          />
          <TextArea
            placeholder="Description"
            value={product.description}
            onChange={(e) => setProduct({...product, description: e.target.value})}
            required
          />
          <Button type="submit">Ajouter</Button>
        </Form>
      </FormContainer>
    </>
  );
}

export default AddProduct;