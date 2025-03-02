import { getHtmlClientHeight, getHtmlClientWidth } from ".";
import type { IHtmlClientDimensions } from ".";

export const getHtmlClientDimensions = (): IHtmlClientDimensions => ({
  htmlClientWidth: getHtmlClientWidth(),
  htmlClientHeight: getHtmlClientHeight(),
});
