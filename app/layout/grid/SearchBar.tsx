import { css } from "@emotion/react";
import { memo, type Dispatch, type SetStateAction } from "react";

interface IProps {
  readonly searchQuery: string;
  readonly setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ searchQuery }: IProps) => (
  <div css={css``}>search: {searchQuery}</div>
);

export default memo(SearchBar);
