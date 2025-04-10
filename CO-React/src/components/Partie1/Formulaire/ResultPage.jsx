import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ResultPage = () => {
  const { state: formData } = useLocation();

  return (
    <Card>
      <h2>Données Soumises</h2>
      <p><strong>Nom:</strong> {formData.nom}</p>
      <p><strong>Prénom:</strong> {formData.prenom}</p>
      {/* Add other form fields here */}
    </Card>
  );
};

export default ResultPage;
