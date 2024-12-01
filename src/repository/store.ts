import { DataStorage, ErrorLogItem, LogItem } from "@lamion-libs/api";
import { storePrefix } from "../defaults/constants";

const eventsKey = storePrefix + "lamion_events";
const errorsKey = storePrefix + "lamion_errors";

export const SessionDataStorage: DataStorage = {
  events(): Array<LogItem> {
    const data = sessionStorage.getItem(eventsKey);
    if (!data) return [];

    return JSON.parse(data);
  },
  errors(): Array<ErrorLogItem> {
    const data = sessionStorage.getItem(errorsKey);
    if (!data) return [];

    return JSON.parse(data);
  },
  addEvent: (value: LogItem) => {
    const items = SessionDataStorage.events();
    const newItems = [...items, value];

    sessionStorage.setItem(eventsKey, JSON.stringify(newItems));
  },
  addError: (value: ErrorLogItem) => {
    const items = SessionDataStorage.errors();
    const newItems = [...items, value];

    sessionStorage.setItem(errorsKey, JSON.stringify(newItems));
  },
  clear: () => {
    sessionStorage.removeItem(eventsKey);
    sessionStorage.removeItem(errorsKey);
  },
};
