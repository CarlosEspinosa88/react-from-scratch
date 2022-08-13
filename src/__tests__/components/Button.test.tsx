import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonType } from '../../components/Button/Button';

describe('<Button />', () => {
  const props: ButtonType = {
    title: 'custom title',
    onPress: jest.fn(),
  };

  test('render button component', () => {
    const { getByText } = render(<Button title={props.title} onPress={() => null} />);

    expect(getByText(/custom title/i)).toBeDefined();
  });

  test('button component fire event onClick one time', () => {
    const { getByText } = render(<Button title={props?.title} onPress={props?.onPress} />);

    fireEvent.click(getByText(/custom title/i));
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
