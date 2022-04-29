import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../components/Button';

describe('<Button />', () => {
  const props = {
    title: 'custom title',
  };

  test('Render ok', () => {
    const { getByText } = render(<Button title={props.title} />);
    expect(getByText(/custom title/i)).toBeDefined();
  });
});
