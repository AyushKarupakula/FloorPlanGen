import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2023 AI-Driven Floor Plan Generator. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
