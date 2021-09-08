import React from 'react';
import imageExp from '@images/email.png';
import styled from '@emotion/styled';
import Button from '@components/Button';

const StyledHeader = styled.h1`
  color: ${(props) => props.theme?.color?.hotpink};
  font-family: ${(props) => props.theme?.font?.family?.bold};
`;

const StyledText = styled.p`
  color: ${(props) => props.theme?.color?.darkgray};
  font-family: ${(props) => props.theme?.font?.family?.regular};
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
      <Button />
      {obj?.a && <StyledText>Optional chaining works fine: {obj?.a}</StyledText>}
      <img src={imageExp} alt="email-ayenda-image" width="300" />
    </>
  );
}
