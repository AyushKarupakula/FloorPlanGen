import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import RoomSelector from './RoomSelector';
import LayoutViewer from './LayoutViewer';
import { generateLayout } from '../mock/layoutData';

const GenerateLayoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const pulse = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-style: italic;
  color: #666;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

function GenerateLayout() {
  const [generatedLayout, setGeneratedLayout] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (preferences) => {
    setIsLoading(true);
    try {
      const layout = await generateLayout(preferences);
      setGeneratedLayout(layout);
    } catch (error) {
      console.error('Error generating layout:', error);
      // You could add an error state and display an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GenerateLayoutContainer>
      <h1>Generate Your Floor Plan</h1>
      <RoomSelector onGenerate={handleGenerate} />
      {isLoading ? (
        <LoadingMessage>Generating your floor plan...</LoadingMessage>
      ) : (
        <LayoutViewer layout={generatedLayout} />
      )}
    </GenerateLayoutContainer>
  );
}

export default GenerateLayout;
