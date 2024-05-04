import { render, screen, fireEvent } from '@testing-library/react';
import CreateArticle  from '../src/pages/CreateArticle';
import React from 'react';
import { describe, it, expect } from 'vitest';


describe('SearchresultPage', () => {
  it('Render create articles form and mock article creation', () => {
    render(<CreateArticle />);

    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
    const formDiv = screen.getByTestId('formDiv');
     const nameInput = screen.getByPlaceholderText('John Doe');
     const emailInput = screen.getByPlaceholderText('johndoe@example.com');
     const phoneInput = screen.getByPlaceholderText('234 0812345678');
      const addressInput = screen.getByPlaceholderText('123 Address street');
      const articleInput = screen.getByPlaceholderText('Unique title');
        expect(formDiv).toBeInTheDocument();
        expect(nameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(phoneInput).toBeInTheDocument();
        expect(addressInput).toBeInTheDocument();
        expect(articleInput).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.change(nameInput, { target: { value: 'New Author' } });
    fireEvent.change(emailInput, { target: { value: 'newautho@gmail.com' } });
    fireEvent.change(phoneInput, { target: { value: '2348060508036' } });
    fireEvent.change(addressInput, { target: { value: '86 Test street' } });
    fireEvent.change(articleInput, { target: { value: 'New article' } });
    fireEvent.click(button);

    const updatedResults = screen.getByTestId('toast');
    expect(updatedResults).toBeInTheDocument();
  });
});