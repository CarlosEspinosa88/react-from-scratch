import React from 'react';
import { css, Global } from '@emotion/react';
import { fontFaces } from '@styles/fontFaces';

export const globalStyles = (
  <Global
    styles={css`
      ${fontFaces}
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        font-size: 16px;
        background: white;
        font-family: 'DM Sans Regular';
      }
    `}
  />
);
