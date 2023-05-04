import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from '../components/nav';

describe('Nav', () => {
  test('should render correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should navigate to the correct routes', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );

    const homeLink = getByText('Home');
    const calculatorLink = getByText('Calculator');
    const quotesLink = getByText('Quotes');

    expect(homeLink.getAttribute('href')).toBe('/');
    expect(calculatorLink.getAttribute('href')).toBe('/Calculator');
    expect(quotesLink.getAttribute('href')).toBe('/Quotes');
  });
});
