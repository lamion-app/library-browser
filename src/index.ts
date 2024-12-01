import { useLamion } from "@lamion-libs/api";
import { useBrowserLamion } from "./lib";
export { BrowserProps } from "./model";

// @ts-ignore
window.useLamion = useLamion;
// @ts-ignore
window.useBrowserLamion = useBrowserLamion;

export default {
  useLamion: useLamion,
  useBrowserLamion: useBrowserLamion,
};
