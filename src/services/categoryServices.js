import http from "./httpServices";

const apiEndpont = "http://localhost:3000/api/category";

export function getCategories() {
  return http.get(apiEndpont);
}
