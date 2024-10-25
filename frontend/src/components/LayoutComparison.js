import React from 'react';
import styled from 'styled-components';

const ComparisonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const LayoutColumn = styled.div`
  width: 48%;
`;

const LayoutImage = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const LayoutDetails = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const DetailItem = styled.li`
  margin-bottom: 0.5rem;
`;

function LayoutComparison({ layout1, layout2 }) {
  return (
    <ComparisonContainer>
      <LayoutColumn>
        <h3>{layout1.name}</h3>
        <LayoutImage src={layout1.image} alt={layout1.name} />
        <LayoutDetails>
          <DetailItem><strong>Style:</strong> {layout1.style}</DetailItem>
          <DetailItem><strong>Room Count:</strong> {layout1.roomCount}</DetailItem>
          <DetailItem><strong>Square Footage:</strong> {layout1.squareFootage} sq ft</DetailItem>
          <DetailItem><strong>Open Plan:</strong> {layout1.openPlan ? 'Yes' : 'No'}</DetailItem>
          <DetailItem><strong>Features:</strong> {layout1.features.join(', ') || 'None'}</DetailItem>
        </LayoutDetails>
      </LayoutColumn>
      <LayoutColumn>
        <h3>{layout2.name}</h3>
        <LayoutImage src={layout2.image} alt={layout2.name} />
        <LayoutDetails>
          <DetailItem><strong>Style:</strong> {layout2.style}</DetailItem>
          <DetailItem><strong>Room Count:</strong> {layout2.roomCount}</DetailItem>
          <DetailItem><strong>Square Footage:</strong> {layout2.squareFootage} sq ft</DetailItem>
          <DetailItem><strong>Open Plan:</strong> {layout2.openPlan ? 'Yes' : 'No'}</DetailItem>
          <DetailItem><strong>Features:</strong> {layout2.features.join(', ') || 'None'}</DetailItem>
        </LayoutDetails>
      </LayoutColumn>
    </ComparisonContainer>
  );
}

export default LayoutComparison;
