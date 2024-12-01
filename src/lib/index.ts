import { useLamion, DeviceInfo } from "@lamion-libs/api";
import { getIdentifyKey } from "../func/identify";
import { SessionDataStorage } from "../repository/store";
import { getDeviceName, getDevicePlatform } from "../func/device";
import { BrowserProps } from "../model";

export const useBrowserLamion = (props: BrowserProps) => {
  return useLamion({
    accessKey: props.accessKey,
    autoFlush: props.autoFlush ?? false,
    createStore: () => {
      return SessionDataStorage;
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
};
