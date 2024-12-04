import { DataStorage } from "@lamion-libs/api";

const flushInterval = 10000;

export function setupAutoFlush(store: DataStorage, flush: () => void) {
  setInterval(() => {
    flush();
  }, flushInterval);
}
