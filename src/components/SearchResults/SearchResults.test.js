import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
  it('renders the component with the correct header', () => {
    // Arrange
    const searchResults = [
      { id: '1', name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
      { id: '2', name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    ];

    // Act
    const { getByText } = render(<SearchResults searchResults={searchResults} />);

    // Assert
    expect(getByText('Results')).toBeInTheDocument();
  });
});
