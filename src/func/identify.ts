import { getCookie, setCookie } from "../utils/cookie";
import { storePrefix } from "../defaults/constants";
import { randomString } from "../utils/random";

const cookieKey = storePrefix + "identify_key";
const cookieExpireDays = 30;

export function getIdentifyKey(): string {
  const cookie = getCookie(cookieKey);

  if (cookie) return cookie;

  const newKey = randomString(32);

  setCookie(cookieKey, newKey, cookieExpireDays);

  return newKey;
}
