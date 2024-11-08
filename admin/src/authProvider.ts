import { AuthProvider, HttpError } from "react-admin";
import Cookies from "js-cookie";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new HttpError("Unauthorized", 401, {
          message: "Invalid username or password",
        });
      }

      const { user, token } = await response.json();
      //Stocke le token dans le cookies
      Cookies.set("token", token, {
        expires: 1,
        secure: true,
        sameSite: "strict",
      });

      // Stocker les informations utilisateur sans le mot de passe
      localStorage.setItem("user", JSON.stringify(user));

      return Promise.resolve();
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
      return Promise.reject(new HttpError("Erreur serveur", 500));
    }
  },
  logout: () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      Cookies.remove("token");
      localStorage.removeItem("user");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    Cookies.get("token") ? Promise.resolve() : Promise.reject(),
  // localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "");
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default authProvider;
