import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const WelcomeText = styled.p`
  color: #666;
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Home Page</Title>
      <WelcomeText>Welcome to our website!</WelcomeText>
    </HomeContainer>
  );
}

export default Home;