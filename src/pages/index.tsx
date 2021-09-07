import React from 'react';
import imageExp from '@images/email.png';
import styled from '@emotion/styled';

const StyledHeader = styled.h1`
  color: hotpink;
`;

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
      <StyledHeader>Home</StyledHeader>
      {obj?.a && <p>Optional chaining works fine: {obj?.a}</p>}
      <img src={imageExp} alt="email-ayenda-image" width="300" />
    </>
  );
}
