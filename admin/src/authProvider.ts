import { AuthProvider, HttpError } from "react-admin";

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

      const user = await response.json();
      // Stocker les informations utilisateur sans le mot de passe
      localStorage.setItem("user", JSON.stringify(user));

      return Promise.resolve();
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
      return Promise.reject(new HttpError("Erreur serveur", 500));
    }
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
