import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 2rem;
`;

const TableContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const Th = styled.th`
  background-color: black;
  color: white;
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid #e0e0e0;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  color: #333;
`;


const Button = styled.button`
  padding: 0.8rem 1.5rem;
  margin: 0 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'add': return 'black';
      case 'delete': return '#ff4444';
      case 'update': return '#666';
      default: return '#333';
    }
  }};
  color: white;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
`;


export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    setContacts(storedContacts);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.numTel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.date_creation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((c) => c.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleUpdate = (contact) => {
    navigate(`/update-contact/${contact.id}`);
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Search by any field"
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%', maxWidth: '900px' }}
      />
      <Button variant="add" onClick={() => navigate('/add-contact')}>
        + Add Contact
      </Button>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Nom</Th>
              <Th>Numéro de Téléphone</Th>
              <Th>Email</Th>
              <Th>Date de Création</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <tr key={contact.id}>
                  <Td>{contact.nom}</Td>
                  <Td>{contact.numTel}</Td>
                  <Td>{contact.email}</Td>
                  <Td>{contact.date_creation}</Td>
                  <Td>
                    <Button variant="delete" onClick={() => handleDelete(contact.id)}>
                      Delete
                    </Button>
                    <Button variant="update" onClick={() => handleUpdate(contact)}>
                      Update
                    </Button>
                    <Button variant="details" onClick={() => navigate(`/contact/${contact.id}`)}>
                      Show Details
                    </Button>
                  </Td>
                </tr>
              ))
            ) : (
              <tr>
                <Td colSpan="6">No contacts available</Td>
              </tr>
            )}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}
