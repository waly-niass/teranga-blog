import { Navigate, useOutletContext } from "react-router";

export default function Connexion() {
  const { connecte, setConnecte } = useOutletContext();

  if (connecte) return <Navigate to="/mon-espace" replace />;

  return (
    <section>
      <h1>Connexion</h1>
      <p>Connexion simulée : aucun mot de passe n'est demandé.</p>
      <button onClick={() => setConnecte(true)}>Se connecter</button>
    </section>
  );
}