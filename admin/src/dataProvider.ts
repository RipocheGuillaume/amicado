import simpleRestProvider from "ra-data-simple-rest";
import Cookies from "js-cookie";
import { fetchUtils } from "react-admin";

interface OptionProps {
  headers?: HeadersInit;
  [key: string]: any; // Permet d'ajouter d'autres propriétés comme signal
}

const fetchJson = (url: string, options: OptionProps = {}) => {
  // Récupérer le token depuis le localStorage
  const token = localStorage.getItem("token") || Cookies.get("token");
  options.headers =
    options.headers || new Headers({ Accept: "application/json" });

  if (token) {
    if (options.headers instanceof Headers) {
      options.headers.set("Authorization", `Bearer ${token}`);
    } else {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
    }
  }

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(
  import.meta.env.VITE_SIMPLE_REST_URL,
  fetchJson,
);
