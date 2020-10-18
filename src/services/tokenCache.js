export default {
  get: () => {
    return localStorage.getItem("token");
  },

  set: (token) => {
    localStorage.setItem("token", token + "");
  },

  delete: (token) => {
    localStorage.removeItem("token")
  },
};
