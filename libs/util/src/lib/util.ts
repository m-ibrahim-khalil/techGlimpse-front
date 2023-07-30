import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

function hasCookie(cookieName = 'jwt') {
  const cookie = Cookies.get(cookieName);
  return !!cookie;
}

function getAuthUsername() {
  const cookie = Cookies.get('jwt');
  if (cookie) {
    const { username }: any = jwt_decode(cookie);
    console.log('coockie: ', username, jwt_decode(cookie));
    if (username) return username.toLowerCase();
    return null;
  }
  return null;
}

function isCookieValid(cookieName = 'jwt'): boolean {
  const cookieValue = Cookies.get(cookieName);
  if (cookieValue) {
    const { exp }: any = jwt_decode(cookieValue);
    const expiryTime = Number(exp) * 1000;
    console.log('expiry time: ', expiryTime, 'Now: ', Date.now());
    if (expiryTime && expiryTime > Date.now()) {
      return true;
    }
  }

  // The cookie is either expired or not found
  return false;
}

function removeCoockie(cookieName = 'jwt') {
  Cookies.remove(cookieName);
}

function truncate(str: string, length: number) {
  return str.length > length ? str.slice(0, length) + ' ...' : str;
}

export { getAuthUsername, hasCookie, isCookieValid, removeCoockie, truncate };
