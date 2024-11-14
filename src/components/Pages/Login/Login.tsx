import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Login } from "../../../types/account";
import useAuth from "../../../hook/useAuth";

export default function App() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Login>();

  const [message, setMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Login> = async (data) => {
    const submitLogin = await login(data.username, data.password);
    if (submitLogin) {
      setMessage("connexion réussie");
      navigate("/");
    } else {
      setMessage("Connexion échoué");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          {...register("username", {
            required: "Le nom d'utilisateur est requis",
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Mot de passe"
          {...register("password", { required: "Le mot de passe est requis" })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Connexion..." : "Se connecter"}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}
