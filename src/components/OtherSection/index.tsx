import React, { useEffect, useState } from 'react';
import { useIsMounted } from '@hooks/index';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function Child() {
  const [data, setData] = useState('loading');
  const isMounted = useIsMounted();

  useEffect(() => {
    delay(3000).then(() => {
      if (isMounted()) setData('OK');
    });
  }, [isMounted]);

  return <p>{data}</p>;
}

export default function OtherSection() {
  const [isVisible, setVisible] = useState<boolean>(false);

  function handleClick() {
    setVisible((state: boolean) => !state);
  }

  return (
    <>
      <button onClick={handleClick}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <Child />}
    </>
  );
}
