import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('calls onSearch prop with correct search term when search button is clicked', () => {
    // Arrange
    const onSearchMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={onSearchMock} />);
    const inputElement = getByPlaceholderText('Enter A Song, Album, or Artist');
    const searchButton = getByText('SEARCH');
    const searchTerm = 'test';

    // Act
    fireEvent.change(inputElement, { target: { value: searchTerm } });
    fireEvent.click(searchButton);

    // Assert
    expect(onSearchMock).toHaveBeenCalledWith(searchTerm);
  });

  it('updates search term state when input value changes', () => {
    // Arrange
    const { getByPlaceholderText } = render(<SearchBar onSearch={() => {}} />);
    const inputElement = getByPlaceholderText('Enter A Song, Album, or Artist');
    const searchTerm = 'test';

    // Act
    fireEvent.change(inputElement, { target: { value: searchTerm } });

    // Assert
    expect(inputElement.value).toBe(searchTerm);
  });
});
