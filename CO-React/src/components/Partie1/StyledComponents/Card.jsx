import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  max-width: 300px;
  margin: 50px auto;
  background-color: #f9f9f9;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #aaa;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

function Card() {
  return (
    <CardContainer>
      <Title>Bienvenue !</Title>

      <Paragraph> Styled Components</Paragraph>

      <Input type="text" placeholder="Entrez votre nom" />

      <Button>Envoyer</Button>
    </CardContainer>
  );
}

export default Card;