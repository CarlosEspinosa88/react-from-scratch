import React from 'react';

export type ButtonType = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress, ...props }: ButtonType) {
  return (
    <button onClick={onPress} {...props}>
      {title}
    </button>
  );
}
