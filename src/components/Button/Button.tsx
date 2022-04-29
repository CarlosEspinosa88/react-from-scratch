import React from 'react';

export default function Button({ title, ...props }: { title: string }) {
  return <button {...props}>{title}</button>;
}
