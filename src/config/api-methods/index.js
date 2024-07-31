// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// let baseApi = 'http://192.168.100.1:5000/';
// // let baseApi = 'http://192.168.0.103:5000/api/';

// let api = axios.create({
//   baseURL: baseApi,
// });

// let Get = async (apiName, id, params) => {
//   return await new Promise(async (resolve, reject) => {
//     const token = await AsyncStorage.getItem('login_token');
//     console.log(token)
//     if (token !== null) {
//       // value previously stored
//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     }

//     api
//       .get(`${apiName}${id ? '/' + id : ''}`, { params: params })
//       .then((res) => {
//         if (res.data.isSuccessfull) {
//           resolve(res.data);
//         } else {
//           reject(res.data);
//         }
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };
// let Post = async (apiName, body) => {
//   return await new Promise(async (resolve, reject) => {
//     const token = await AsyncStorage.getItem('login_token');
//     if (token !== null) {
//       // value previously stored
//       api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     }
//     api
//       .post(`${apiName}`, body)
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };
// let Put = async (apiName, body, id) => {
//   const token = await AsyncStorage.getItem('login_token');
//   if (token !== null) {
//     // value previously stored
//     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   }
//   return await api.put(`${apiName}/${id}`, body);
// };
// let Delete = async (apiName, id) => {
//   const token = await AsyncStorage.getItem('login_token');
//   if (token !== null) {
//     // value previously stored
//     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   }
//   return await api.delete(`${apiName}/${id}`);
// };

// export { Get, Post, Delete, Put };

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const apiHandle = axios.create({
  baseURL: "http://10.0.12.246:8000/",
  headers: {
    Authorization: `Bearer`,
  },
});

// export const Get = (endPoint, id) => {
//   return apiHandle.get(`${endPoint}/${id ? id : ""}`);
// };
// export const Delete = (endPoint, id) => {
//   return apiHandle.delete(`${endPoint}/${id ? id : ""}`);
// };
// export const Put = (endPoint, id) => {
//   return apiHandle.put(`${endPoint}/`);
// };
// export const Post = (endPoint, id) => {
//   return apiHandle.post(`${endPoint}`);
// };
// export const Post = (endpoint, stateName, id) => {
//   return apiHandle.post(`${endpoint}/${id ? id : ""}`, stateName);
// };

export const Post = async (endpoint, stateName, id) => {
  return await new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem("authToken");
    if (token !== null) {
      // value previously stored
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    api
      .post(`${endpoint}/${id ? id : ""}`, stateName)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const Get = async (endpoint, id, params) => {
  return await new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem("login_token");
    console.log(token);
    if (token !== null) {
      // value previously stored
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    api
      .get(`${endpoint}${id ? "/" + id : ""}`, { params: params })
      .then((res) => {
        if (res.data.isSuccessfull) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const Put = async (endpoint, stateName, id) => {
  const token = await AsyncStorage.getItem("login_token");
  if (token !== null) {
    // value previously stored
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return await api.put(`${endpoint}/${id}`, stateName);
};

export const Delete = async (endpoint, id) => {
  const token = await AsyncStorage.getItem("login_token");
  if (token !== null) {
    // value previously stored
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return await api.delete(`${endpoint}/${id}`);
};
