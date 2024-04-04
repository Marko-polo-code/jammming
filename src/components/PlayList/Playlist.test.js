import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Playlist from './Playlist';

describe('Playlist component', () => {
  test('renders input with default value', () => {
    const { getByDisplayValue } = render(<Playlist playlistTracks={[]} />);
    expect(getByDisplayValue('New Playlist')).toBeInTheDocument();
  });

  test('changes playlist name on input change', () => {
    const onNameChange = jest.fn();
    const { getByDisplayValue } = render(
      <Playlist playlistTracks={[]} onNameChange={onNameChange} />
    );
    const input = getByDisplayValue('New Playlist');
    fireEvent.change(input, { target: { value: 'My Playlist' } });
    expect(onNameChange).toHaveBeenCalledWith('My Playlist');
  });

  test('calls onSave function when save button is clicked', () => {
    const onSave = jest.fn();
    const { getByText } = render(<Playlist playlistTracks={[]} onSave={onSave} />);
    const saveButton = getByText('SAVE TO SPOTIFY');
    fireEvent.click(saveButton);
    expect(onSave).toHaveBeenCalled();
  });

  // Add more test cases as needed
});
