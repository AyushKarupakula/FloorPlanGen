import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import RoomSelector from './RoomSelector';
import LayoutViewer from './LayoutViewer';
import LayoutHistory from './LayoutHistory';
import LayoutComparison from './LayoutComparison';
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

const CompareButton = styled.button`
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

function GenerateLayout() {
  const [generatedLayout, setGeneratedLayout] = useState(null);
  const [layoutHistory, setLayoutHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [comparisonLayout, setComparisonLayout] = useState(null);

  const handleGenerate = async (preferences) => {
    setIsLoading(true);
    try {
      const layout = await generateLayout(preferences);
      setGeneratedLayout(layout);
      setLayoutHistory(prevHistory => [layout, ...prevHistory]);
    } catch (error) {
      console.error('Error generating layout:', error);
      // You could add an error state and display an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewLayout = (layout) => {
    setGeneratedLayout(layout);
  };

  const handleCompare = () => {
    if (layoutHistory.length > 1) {
      setComparisonLayout(layoutHistory[1]);
    }
  };

  return (
    <GenerateLayoutContainer>
      <h1>Generate Your Floor Plan</h1>
      <RoomSelector onGenerate={handleGenerate} />
      {isLoading ? (
        <LoadingMessage>Generating your floor plan...</LoadingMessage>
      ) : generatedLayout && (
        <>
          <LayoutViewer layout={generatedLayout} />
          {layoutHistory.length > 1 && (
            <CompareButton onClick={handleCompare}>
              Compare with Previous Layout
            </CompareButton>
          )}
        </>
      )}
      {generatedLayout && comparisonLayout && (
        <LayoutComparison layout1={generatedLayout} layout2={comparisonLayout} />
      )}
      <LayoutHistory layouts={layoutHistory} onViewLayout={handleViewLayout} />
    </GenerateLayoutContainer>
  );
}

export default GenerateLayout;
