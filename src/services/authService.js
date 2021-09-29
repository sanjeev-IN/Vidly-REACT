import http from "./httpServices";
import jwtDecode from "jwt-decode";

const apiEndPoint = "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
};

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
};

export function logout() {
  localStorage.removeItem(tokenKey);
};

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) { return null; }
};

export function getJwt() {
  return localStorage.getItem(tokenKey);
};

const auth = { login, logout, getCurrentUser, loginWithJwt, getJwt };

export default auth;