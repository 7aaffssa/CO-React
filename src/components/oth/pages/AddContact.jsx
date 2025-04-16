import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 2rem;
`;

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  color: black;
`;

const Title = styled.h2`
  color: black;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.8rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  background-color: white;
  color: black;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: black;
  }

  &::placeholder {
    color: #666;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    background-color: #333;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

function AddContact() {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    nom: '',
    email: '',
    numTel: '',
    date_creation: new Date().toLocaleDateString()
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!contact.nom || !contact.email || !contact.numTel) {
      alert('Please fill all fields');
      return;
    }

    const existingContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    const newContact = {
      ...contact,
      id: existingContacts.length + 1
    };
    
    const updatedContacts = [...existingContacts, newContact];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    navigate('/Contacts');
  };

  return (
    <Container>
      <FormContainer>
        <Title>Ajouter un Contact</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nom"
            value={contact.nom}
            onChange={(e) => setContact({...contact, nom: e.target.value})}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({...contact, email: e.target.value})}
            required
          />
          <Input
            type="text"
            placeholder="Téléphone"
            value={contact.numTel}
            onChange={(e) => setContact({...contact, numTel: e.target.value})}
            required
          />
          <Button type="submit">Ajouter</Button>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default AddContact;
