import React from 'react';
import imageExp from '@images/email.png';
import styled from '@emotion/styled';
import Button from '@components/Button';
import Section from '@components/Section';
import OtherSection from '@components/OtherSection';

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
      {Array.from({ length: 5 }).map((_, index) => (
        <Section key={index + 1} title={`${index + 1}`} />
      ))}
      <StyledHeader>Home</StyledHeader>
      <Button title="Soy un button" onPress={() => null} />
      {obj?.a && <StyledText>Optional chaining works fine: {obj?.a}</StyledText>}
      <img src={imageExp} alt="email-ayenda-image" width="300" />
      <OtherSection />
    </>
  );
}
