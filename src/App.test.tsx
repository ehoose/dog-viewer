import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dog viewer text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Dog Viewer/i);
    expect(linkElement).toBeInTheDocument();
});
