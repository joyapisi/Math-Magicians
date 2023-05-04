import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';
import MathQuotes from '../components/MathQuotes';

fetchMock.enableMocks();

describe('MathQuotes', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('renders loading state', async () => {
    fetch.mockResponseOnce(() => new Promise((resolve) => setTimeout(() => resolve({ body: JSON.stringify([{ quote: 'Test quote' }]) }), 100)));
    render(<MathQuotes />);
    expect(screen.getByText('Quote is still loading ...')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText('Quote is still loading ...'));
  });

  test('renders quote', async () => {
    fetch.mockResponseOnce(JSON.stringify([{ quote: 'Test quote' }]));
    render(<MathQuotes />);

    const quoteElement = await screen.findByText('Test quote');
    expect(quoteElement).toBeInTheDocument();
  });

  test('renders error state', async () => {
    fetch.mockReject(new Error('Failed to fetch quotes'));
    render(<MathQuotes />);

    const errorElement = await screen.findByText('Error loading your quote! Refresh to try again.');
    expect(errorElement).toBeInTheDocument();
  });
});
