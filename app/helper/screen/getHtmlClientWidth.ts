import { htmlElement } from "./htmlElement";

/**
 * How wide of a screen to generate static content for.
 *
 * A larger number will cause the first photos on the screen to look nicer, but load slower.
 */
const STATIC_GENERATION_HTML_CLIENT_WIDTH = 768;

export const getHtmlClientWidth = (): number =>
  htmlElement ? htmlElement.clientWidth : STATIC_GENERATION_HTML_CLIENT_WIDTH;
