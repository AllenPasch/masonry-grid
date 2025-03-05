import { css } from "@emotion/react";
import { memo } from "react";

interface IProps {
  readonly searchQuery: string;
  readonly setSearchQuery: (searchQuery: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: IProps) => (
  <header
    css={css`
      position: fixed;
      left: 25vw;
      top: 16px;
      width: 50vw;
      z-index: 2;
    `}
  >
    <div
      css={css`
        position: relative;
      `}
    >
      <input
        type="search"
        value={searchQuery}
        onChange={({ target: { value } }) => setSearchQuery(value)}
        css={css`
          background-color: #333;
          border: 0;
          border-radius: 32px;
          color: #fff;
          font-family: inherit;
          font-size: 16px;
          padding-left: 14px;
          padding-top: 8px;
          padding-bottom: 8px;
          padding-right: 8px;
          width: 100%;

          opacity: 0.75;
          &:hover,
          &:focus {
            opacity: 1;
          }
        `}
        aria-label="Search"
      />
    </div>
  </header>
);

export default memo(SearchBar);
