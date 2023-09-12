import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import { getCookie, removeCookie } from 'typescript-cookie';

function hasCookie(cookieName = 'jwt') {
  const cookie = getCookie(cookieName);
  return !!cookie;
}

function getAuthUsername() {
  const cookie = getCookie('jwt');
  if (cookie) {
    const { username }: any = jwt_decode(cookie);
    console.log('coockie: ', username, jwt_decode(cookie));
    if (username) return username.toLowerCase();
    return null;
  }
  return null;
}

function isCookieValid(cookieName = 'jwt'): boolean {
  const cookieValue = getCookie(cookieName);
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
  removeCookie(cookieName);
}

function truncate(str: string, length: number) {
  return str.length > length ? str.slice(0, length) + ' ...' : str;
}

function showToast(message: string, type: string) {
  toast.dismiss();
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'info':
      toast.info(message);
      break;
    case 'warning':
      toast.warning(message);
      break;
    default:
      toast(message);
      break;
  }
}

export {
  getAuthUsername,
  hasCookie,
  isCookieValid,
  removeCoockie,
  showToast,
  truncate,
};
