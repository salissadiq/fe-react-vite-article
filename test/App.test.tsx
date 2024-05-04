import React from 'react'
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from '../src/App'
test('It renders Hello world', () => {
    render(<App />);

    const text = screen.getByRole('heading', {
        level: 1
    });
    expect(text).toHaveTextContent('Hello world');
})