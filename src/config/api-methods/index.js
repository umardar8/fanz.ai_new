import axios from "axios";

export const apiHandle = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    Authorization: `Bearer `,
  },
});

export const Get = (endPoint, id) => {
  return apiHandle.get(`${endPoint}/${id ? id : ""}`);
};
export const Delete = (endPoint, id) => {
  return apiHandle.delete(`${endPoint}/${id ? id : ""}`);
};
export const Put = (endPoint, id) => {
  return apiHandle.put(`${endPoint}/`);
};
// export const Post = (endPoint, id) => {
//   return apiHandle.post(`${endPoint}`);
// };

export const Post = (endpoint, stateName, id) => {
  return apiHandle.post(`${endpoint}/${id ? id : ""}`, stateName);
};
