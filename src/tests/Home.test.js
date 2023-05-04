import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Home', () => {
  test('should render correctly', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
