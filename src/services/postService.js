import http from "./httpServices";

const apiEndpont = "http://localhost:3000/api/posts";

export function getPost(id) {
  // return posts.find((post) => post.id === parseInt(id));
  return http.get(`${apiEndpont}/${id}`);
}

export function getPosts() {
  return http.get(apiEndpont);
}

export function getPostsByCategory(id) {
  return http.get(`${apiEndpont}/bycategory/${id}`);
}
