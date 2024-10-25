import React from 'react';
import styled from 'styled-components';

const ViewerContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
`;

const LayoutImage = styled.img`
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const LayoutDescription = styled.p`
  margin-top: 1rem;
  color: #666;
`;

function LayoutViewer({ layout }) {
  if (!layout) {
    return null;
  }

  return (
    <ViewerContainer>
      <h2>{layout.name}</h2>
      <LayoutImage src={layout.image} alt={layout.name} />
      <LayoutDescription>{layout.description}</LayoutDescription>
    </ViewerContainer>
  );
}

export default LayoutViewer;
