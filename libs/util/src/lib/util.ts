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
    console.log('coockie: ', username);
    if (username) return username.toLowerCase();
    return null;
  }
  return null;
}

function removeCoockie(cookieName = 'jwt') {
  Cookies.remove(cookieName);
}

export { hasCookie, getAuthUsername, removeCoockie };
