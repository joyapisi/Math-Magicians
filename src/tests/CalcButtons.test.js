import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CalcButtons from '../components/CalcButtons';

describe('CalcButtons', () => {
  it('should match snapshot', () => {
    const { container } = render(<CalcButtons clickBtn={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call clickBtn prop when a button is clicked', () => {
    const mockClickBtn = jest.fn();
    const { getByText } = render(<CalcButtons clickBtn={mockClickBtn} />);
    fireEvent.click(getByText('5'));
    expect(mockClickBtn).toHaveBeenCalledWith('5');
  });
});
