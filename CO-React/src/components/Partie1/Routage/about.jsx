import styled from 'styled-components';

const AboutContainer = styled.div`
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

const AboutText = styled.p`
  color: #666;
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
`;

function About() {
  return (
    <AboutContainer>
      <Title>About Page</Title>
      <AboutText>
        This is the about page of our website. Here you can learn more about us.
      </AboutText>
    </AboutContainer>
  );
}

export default About;