import { type IHtmlClientDimensions } from ".";
import { getHtmlClientHeight } from "./getHtmlClientHeight";
import { getHtmlClientWidth } from "./getHtmlClientWidth";

export const getHtmlClientDimensions = (): IHtmlClientDimensions => ({
  htmlClientWidth: getHtmlClientWidth(),
  htmlClientHeight: getHtmlClientHeight(),
});
