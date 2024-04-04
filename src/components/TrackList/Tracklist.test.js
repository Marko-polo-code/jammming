import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tracklist from './Tracklist';

describe('Tracklist component', () => {
  it('renders track information correctly', () => {
    // Arrange
    const track = { id: '1', name: 'Track 1', artist: 'Artist 1', album: 'Album 1' };

    // Act
    const { getByText } = render(<Tracklist tracks={[track]} isRemoval={false} />);

    // Assert
    expect(getByText('Track 1')).toBeInTheDocument();
    expect(getByText('Artist 1 | Album 1')).toBeInTheDocument();
  });

  it('calls onAdd when the add button is clicked', () => {
    // Arrange
    const track = { id: '1', name: 'Track 1', artist: 'Artist 1', album: 'Album 1' };
    const onAddMock = jest.fn();

    // Act
    const { getByText } = render(<Tracklist tracks={[track]} onAdd={onAddMock} isRemoval={false} />);
    const addButton = getByText('+');
    fireEvent.click(addButton);

    // Assert
    expect(onAddMock).toHaveBeenCalledWith(track);
  });

  it('calls onRemove when the remove button is clicked', () => {
    // Arrange
    const track = { id: '1', name: 'Track 1', artist: 'Artist 1', album: 'Album 1' };
    const onRemoveMock = jest.fn();

    // Act
    const { getByText } = render(<Tracklist tracks={[track]} onRemove={onRemoveMock} isRemoval />);
    const removeButton = getByText('-');
    fireEvent.click(removeButton);

    // Assert
    expect(onRemoveMock).toHaveBeenCalledWith(track);
  });
});
