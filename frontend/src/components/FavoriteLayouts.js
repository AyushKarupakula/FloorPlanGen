import React from 'react';
import styled from 'styled-components';
import LayoutViewer from './LayoutViewer';

const FavoritesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

function FavoriteLayouts() {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  return (
    <FavoritesContainer>
      <h1>Favorite Layouts</h1>
      {favorites.length === 0 ? (
        <p>You haven't added any layouts to your favorites yet.</p>
      ) : (
        favorites.map(layout => (
          <LayoutViewer 
            key={layout.id} 
            layout={layout} 
            onFavorite={() => {}} 
            isFavorite={true} 
          />
        ))
      )}
    </FavoritesContainer>
  );
}

export default FavoriteLayouts;
