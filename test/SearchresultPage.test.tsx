import { render, screen, fireEvent } from '@testing-library/react';
import SearchresultPage  from '../src/pages/SearchresultPage';
import React from 'react';
import { describe, it, expect } from 'vitest';


describe('SearchresultPage', () => {
  it('Renders the search form and mock fetch articls', () => {
    render(<SearchresultPage />);

    const input = screen.getByPlaceholderText('Search articles by author name or title');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();

    const resultsContainer = screen.getByTestId('results');
    expect(resultsContainer).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(button);

    const updatedResults = screen.getByTestId('results');
    expect(updatedResults).toBeInTheDocument();
  });
});