import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../../components/Counter';

describe('<Counter />', () => {
  test('render button component', () => {
    const { getByText, getByRole } = render(<Counter />);

    const buttonElement = getByText(/add one/i);
    const divElement = getByRole('counter-info');
    fireEvent.click(buttonElement);

    expect(divElement).toHaveTextContent('Count is 1');
  });
});
