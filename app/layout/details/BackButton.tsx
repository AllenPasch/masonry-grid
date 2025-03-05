import { css } from "@emotion/react";
import { ArrowBack } from "@material-ui/icons";
import { memo } from "react";
import { Link } from "react-router";

interface IProps {
  readonly to: string | number;
}

const BackButton = ({ to }: IProps) => (
  <Link
    to={to as unknown as string}
    css={css`
      color: var(--foreground);
      opacity: 0.75;
      padding: 16px;

      &:hover,
      &:focus {
        opacity: 1;
      }
    `}
    aria-label="Back to Photo Gallery"
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
      `}
    >
      <ArrowBack />
    </div>
  </Link>
);

export default memo(BackButton);
