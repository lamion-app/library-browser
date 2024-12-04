import { useLamion } from "@lamion-libs/api";
import { getIdentifyKey } from "../func/identify";
import { SessionDataStorage } from "../repository/store";
import { getDeviceName, getDevicePlatform } from "../func/device";
import { setupAutoFlush } from "../func/autoFlush";
import { BrowserProps } from "../model";

export const useBrowserLamion = (props: BrowserProps) => {
  const store = SessionDataStorage;

  const lamion = useLamion({
    accessKey: props.accessKey,
    autoFlush: props.autoFlush ?? false,
    createStore: () => {
      return store;
    },
    meta: {
      clientId: props.clientId,
      identifyKey: async () => {
        return getIdentifyKey();
      },
      device: () => ({
        name: getDeviceName(),
        platform: getDevicePlatform(),
      }),
    },
  });

  setupAutoFlush(store, lamion.flush);

  return lamion;
};
