import { memo } from "react";

import { getBackButtonTo } from "~/helper/router";
import BackButton from "./BackButton";

const BackButtonContainer = () => {
  const to = getBackButtonTo();

  return <BackButton to={to} />;
};

export default memo(BackButtonContainer);
