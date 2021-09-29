import http from './httpServices';

const apiEndPoint = "/genres";

export function getGenres() {
  return http.get(apiEndPoint);
}