export * from "./index";

import { useLamion } from "@lamion-libs/api";
import { useBrowserLamion } from "./lib";

if (typeof window !== "undefined") {
  // @ts-ignore
  window.useLamion = useLamion;
  // @ts-ignore
  window.useBrowserLamion = useBrowserLamion;
}
