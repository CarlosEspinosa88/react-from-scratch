import React, { useRef } from 'react';
import { useIntersectionObserver } from '@hooks/index';

type SectionProps = {
  title: string;
};

export default function Section({ title }: SectionProps) {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  console.log(`RENDER SECTION ${title}`, { isVisible });
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        minHeight: '100vh',
        border: '1px dashed #000',
      }}
    >
      <div style={{ margin: 'auto' }}>{title}</div>
    </div>
  );
}
