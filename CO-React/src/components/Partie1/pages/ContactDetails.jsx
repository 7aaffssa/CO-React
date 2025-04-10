import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 2rem;
`;

const Card = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: black;
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h2`
  color: black;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 1rem;
`;

const DetailRow = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.span`
  font-weight: 600;
  color: black;
  flex: 1;
`;

const Value = styled.span`
  color: #444;
  flex: 2;
  text-align: right;
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: #333;
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  padding: 2rem;
`;

export default function ContactDetail() {
  const [contact, setContact] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    const foundContact = contacts.find(c => c.id === parseInt(id));
    setContact(foundContact);
  }, [id]);

  if (!contact) {
    return (
      <Container>
        <Card>
          <ErrorMessage>Contact not found</ErrorMessage>
          <Button onClick={() => navigate('/Contacts')}>
            Return to Contacts List
          </Button>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Card>
        <Title>Contact Details</Title>
        <DetailRow>
          <Label>ID:</Label>
          <Value>{contact.id}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Nom:</Label>
          <Value>{contact.nom}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Email:</Label>
          <Value>{contact.email}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Numéro de Téléphone:</Label>
          <Value>{contact.numTel}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Date de Création:</Label>
          <Value>{contact.date_creation}</Value>
        </DetailRow>
        <Button onClick={() => navigate('/Contacts')}>
          Back to Contacts
        </Button>
      </Card>
    </Container>
  );
}
