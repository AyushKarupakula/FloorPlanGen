import React, { useState } from 'react';
import styled from 'styled-components';
import RoomSelector from './RoomSelector';
import LayoutViewer from './LayoutViewer';
import { generateLayout } from '../mock/layoutData';

const GenerateLayoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

function GenerateLayout() {
  const [generatedLayout, setGeneratedLayout] = useState(null);

  const handleGenerate = async (preferences) => {
    const layout = await generateLayout(preferences);
    setGeneratedLayout(layout);
  };

  return (
    <GenerateLayoutContainer>
      <h1>Generate Your Floor Plan</h1>
      <RoomSelector onGenerate={handleGenerate} />
      <LayoutViewer layout={generatedLayout} />
    </GenerateLayoutContainer>
  );
}

export default GenerateLayout;
