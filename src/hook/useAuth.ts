import { useCallback, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import useAccountStore from "../store";

export enum AuthStatus {
  Unknown = 0,
  Authentificated = 1,
  Guest = 2,
}

export default function useAuth() {
  const { account, setAccount } = useAccountStore();
  let status = AuthStatus.Unknown;
  switch (account) {
    case null:
      status = AuthStatus.Guest;
      break;
    case undefined:
      status = AuthStatus.Unknown;
      break;
    default:
      status = AuthStatus.Authentificated;
      break;
  }

  const authenticate = useCallback(async () => {
    const token = Cookies.get("authToken");
    if (!token) {
      setAccount(null);
      return false;
    }
    try {
      // Envoyer une requête de vérification de token à l'API
      const response = await axios.get(
        "https://api.amicado.fr/users/verify-token",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAccount(response.data.username);
      return true;
    } catch (error) {
      console.error("Token invalide ou expiré :", error);
      setAccount(null);
      return false;
    }
  }, [setAccount]);

  const login = useCallback(
    async (username: string, password: string) => {
      try {
        const response = await axios.post(
          "https://api.amicado.fr/users/login",
          { username, password }
        );

        if (response.status === 401) {
          throw new Error("Nom d'utilisateur ou mot de passe incorrect");
        }

        if (response.status === 500) {
          throw new Error("Le serveur ne répond pas");
        }

        const { token } = await response.data;
        Cookies.set("authToken", token, { expires: 7 }); // Stocke le jeton dans un cookie pour 1 jour
        setAccount(response.data); // Met à jour l'utilisateur
        return true;
      } catch (error) {
        console.error("Erreur de connexion:", error);
        setAccount(null);
        return false;
      }
    },
    [setAccount]
  );

  const logout = useCallback(() => {
    Cookies.remove("authToken");
    setAccount(null); // Réinitialise le compte dans le store
  }, [setAccount]);

  useEffect(() => {
    if (status === AuthStatus.Unknown) {
      authenticate();
    }
  }, [status, authenticate]);

  return {
    account,
    status,
    authenticate,
    login,
    logout,
  };
}
