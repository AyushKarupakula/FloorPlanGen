import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #333;
`;

const Description = styled.p`
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #0056b3;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to AI-Driven Floor Plan Generator</Title>
      <Description>
        Experience the future of architectural design with our AI-powered floor plan generator.
        Create optimized layouts based on your preferences and needs.
      </Description>
      <CTAButton to="/generate">Generate Your Floor Plan</CTAButton>
    </HomeContainer>
  );
}

export default Home;
