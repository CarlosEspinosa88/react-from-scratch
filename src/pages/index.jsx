import React from "react";
import imageExp from '../images/email.png';

export default function Home() {
  const obj = { a: 1 }
  if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }

  return (
    <>
      <p>Hola estoy en Home</p>
      {obj?.hola && (<p>no debería renderizar</p>)}
      {obj?.a && (<p>tengo un valor y me renderizo</p>)}
      <img src={imageExp} alt="email-ayenda" width="300" />
    </>
  )
}