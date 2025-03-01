import { Html, Head, Main, NextScript } from "next/document";

import { StyledComponentsRegistry } from "@/style";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <StyledComponentsRegistry>
          <Main />
        </StyledComponentsRegistry>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
