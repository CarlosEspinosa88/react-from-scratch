import { css } from '@emotion/react';
import RegularDmSansWoff from '@fonts/regular-dm-sans.woff';
import RegularDmSansWoffTwo from '@fonts/regular-dm-sans.woff2';
import BoldDmSansWoff from '@fonts/bold-dm-sans.woff';
import BoldDmSansWoffTwo from '@fonts/bold-dm-sans.woff2';

export const fontFaces = css`
  @font-face {
    font-family: 'DM Sans Regular';
    font-style: normal;
    font-weight: 400;
    src: url('${RegularDmSansWoffTwo}') format('woff2'), url('${RegularDmSansWoff}') format('woff');
  }

  @font-face {
    font-family: 'DM Sans Bold';
    font-style: bold;
    font-weight: 700;
    src: url('${BoldDmSansWoffTwo}') format('woff2'), url('${BoldDmSansWoff}') format('woff');
  }
`;
