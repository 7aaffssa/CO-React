import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens/data from localStorage
    localStorage.clear();
    // Redirect to login page
    navigate('/login');
  };

  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h1>Your App Name</h1>
      </div>
      <button 
        onClick={handleLogout}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
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
  background-color: #ffc107;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0a800;
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

export default function UpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    libelle: '',
    code: '',
    description: ''
  });

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!product.libelle || !product.code || !product.description) {
      alert('Please fill all fields');
      return;
    }

    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const updatedProducts = products.map(p => 
      p.id === parseInt(id) ? { ...product, id: parseInt(id) } : p
    );
    
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
        <h2>Modifier le Produit</h2>
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
          <Button type="submit">Modifier</Button>
        </Form>
      </FormContainer>
    </>
  );
}