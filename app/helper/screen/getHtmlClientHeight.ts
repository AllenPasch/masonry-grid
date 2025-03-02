import { htmlElement } from ".";

/**
 * How tall of a screen to generate static content for.
 *
 * A larger number will cause more photos to load before the JavaScript runs and executes.
 */
const STATIC_GENERATION_HTML_CLIENT_HEIGHT = 1366;

export const getHtmlClientHeight = (): number =>
  htmlElement ? htmlElement.clientHeight : STATIC_GENERATION_HTML_CLIENT_HEIGHT;
