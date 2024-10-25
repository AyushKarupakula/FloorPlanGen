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

const SaveButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const LayoutDetails = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
  text-align: left;
`;

const DetailItem = styled.li`
  margin-bottom: 0.5rem;
`;

function LayoutViewer({ layout }) {
  const [zoom, setZoom] = useState(1);
  const [saved, setSaved] = useState(false);

  if (!layout) {
    return null;
  }

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5));
  const handleResetZoom = () => setZoom(1);

  const handleSave = () => {
    // In a real application, this would save the layout to a database
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <ViewerContainer>
      <h2>{layout.name}</h2>
      <LayoutImage src={layout.image} alt={layout.name} zoom={zoom} />
      <LayoutDescription>{layout.description}</LayoutDescription>
      <LayoutDetails>
        <DetailItem><strong>Style:</strong> {layout.style}</DetailItem>
        <DetailItem><strong>Room Count:</strong> {layout.roomCount}</DetailItem>
        <DetailItem><strong>Square Footage:</strong> {layout.squareFootage} sq ft</DetailItem>
        <DetailItem><strong>Open Plan:</strong> {layout.openPlan ? 'Yes' : 'No'}</DetailItem>
        <DetailItem><strong>Features:</strong> {layout.features.join(', ') || 'None'}</DetailItem>
      </LayoutDetails>
      <ZoomControls>
        <ZoomButton onClick={handleZoomOut}>Zoom Out</ZoomButton>
        <ZoomButton onClick={handleResetZoom}>Reset</ZoomButton>
        <ZoomButton onClick={handleZoomIn}>Zoom In</ZoomButton>
      </ZoomControls>
      <SaveButton onClick={handleSave}>
        {saved ? 'Saved!' : 'Save Layout'}
      </SaveButton>
    </ViewerContainer>
  );
}

export default LayoutViewer;
