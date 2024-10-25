import React, { useState } from 'react';
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
  transition: transform 0.3s ease;
  transform: scale(${props => props.zoom});
`;

const LayoutDescription = styled.p`
  margin-top: 1rem;
  color: #666;
`;

const ZoomControls = styled.div`
  margin-top: 1rem;
`;

const ZoomButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

function LayoutViewer({ layout }) {
  const [zoom, setZoom] = useState(1);

  if (!layout) {
    return null;
  }

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5));
  const handleResetZoom = () => setZoom(1);

  return (
    <ViewerContainer>
      <h2>{layout.name}</h2>
      <LayoutImage src={layout.image} alt={layout.name} zoom={zoom} />
      <LayoutDescription>{layout.description}</LayoutDescription>
      <ZoomControls>
        <ZoomButton onClick={handleZoomOut}>Zoom Out</ZoomButton>
        <ZoomButton onClick={handleResetZoom}>Reset</ZoomButton>
        <ZoomButton onClick={handleZoomIn}>Zoom In</ZoomButton>
      </ZoomControls>
    </ViewerContainer>
  );
}

export default LayoutViewer;
