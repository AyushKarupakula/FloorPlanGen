import React from 'react';
import styled from 'styled-components';

const HistoryContainer = styled.div`
  margin-top: 2rem;
`;

const HistoryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const HistoryItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const HistoryImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 1rem;
`;

const HistoryDetails = styled.div`
  flex-grow: 1;
`;

const ViewButton = styled.button`
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

function LayoutHistory({ layouts, onViewLayout }) {
  return (
    <HistoryContainer>
      <h2>Layout History</h2>
      <HistoryList>
        {layouts.map((layout) => (
          <HistoryItem key={layout.id}>
            <HistoryImage src={layout.image} alt={layout.name} />
            <HistoryDetails>
              <h3>{layout.name}</h3>
              <p>{layout.style} - {layout.squareFootage} sq ft</p>
            </HistoryDetails>
            <ViewButton onClick={() => onViewLayout(layout)}>View</ViewButton>
          </HistoryItem>
        ))}
      </HistoryList>
    </HistoryContainer>
  );
}

export default LayoutHistory;
