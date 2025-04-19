import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 2rem;
`;

const FormContainer = styled.div`
  background: white;
  padding: 2.5rem;
  max-width: 600px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  background-color: white;
  color: black;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: black;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
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

  &:hover {
    background-color: #333;
    transform: translateY(-2px);
  }
`;

const Header = styled.div`
  background-color: black;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-1px);
  }
`;
export default function EditContact() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [contact, setContact] = useState({
    nom: '',
    email: '',
    numTel: '',
    date_creation: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    const foundContact = contacts.find((c) => c.id === parseInt(id));

    if (foundContact) {
      setContact(foundContact);
    } else {
      setError('Contact introuvable');
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contact.nom || !contact.email || !contact.numTel) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    const updatedContacts = contacts.map((c) =>
      c.id === parseInt(id) ? { ...contact, id: parseInt(id) } : c
    );

    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    navigate('/Contacts');
  };

  return (
    <>
      <Header>
        <h2>Modifier le Contact</h2>
        <NavButton onClick={() => navigate('/Contacts')}>Retour</NavButton>
      </Header>
      <Container>
        <FormContainer>
          {error ? (
            <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Nom"
                value={contact.nom}
                onChange={(e) => setContact({ ...contact, nom: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                required
              />
              <Input
                type="text"
                placeholder="Téléphone"
                value={contact.numTel}
                onChange={(e) => setContact({ ...contact, numTel: e.target.value })}
                required
              />
              <Button type="submit">Modifier</Button>
            </Form>
          )}
        </FormContainer>
      </Container>
    </>
  );
}

