import { css } from "@emotion/react";
import { memo } from "react";

interface IProps {
  readonly searchQuery: string;
  readonly setSearchQuery: (searchQuery: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: IProps) => (
  <div css={css``}>
    <input
      type="search"
      value={searchQuery}
      onChange={({ target: { value } }) => setSearchQuery(value)}
    />
  </div>
);

export default memo(SearchBar);
