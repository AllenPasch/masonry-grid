import { memo, type Dispatch, type SetStateAction } from "react";

import SearchBar from "./SearchBar";

interface IProps {
  readonly searchQuery: string;
  readonly setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchBarContainer = ({ searchQuery, setSearchQuery }: IProps) => {
  return (
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
  );
};

export default memo(SearchBarContainer);
