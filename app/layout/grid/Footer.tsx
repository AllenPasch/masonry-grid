import { css } from "@emotion/react";
import { memo } from "react";

interface IProps {
  readonly className?: string;
}

const Footer = ({ className }: IProps) => (
  <div
    css={css`
      cursor: default;
      font-size: 14px;
      padding: 16px;
      text-align: center;
    `}
  >
    &copy; {new Date().getFullYear()} Allen Pasch.&nbsp; Photos provided by{" "}
    <a
      href="https://www.pexels.com/"
      target="_blank"
      css={css`
        color: var(--foreground);
      `}
    >
      Pexels
    </a>
    .
  </div>
);

export default memo(Footer);
