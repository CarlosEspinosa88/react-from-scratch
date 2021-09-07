import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      hotpink: string;
      darkgray: string;
    };
    font: {
      family: {
        bold: string;
        regular: string;
      };
    };
  }
}
