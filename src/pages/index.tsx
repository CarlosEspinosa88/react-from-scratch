import React from 'react';
import imageExp from '@images/email.png';

type ObjProps = {
  a: number;
};

const obj: ObjProps = {
  a: 1,
};

export default function Home() {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }

  return (
    <>
      <p>Hola estoy en Home</p>
      {obj?.a && <p>tengo un valor y me renderizo: {obj?.a}</p>}
      <img src={imageExp} alt="email-ayenda" width="300" />
    </>
  );
}
