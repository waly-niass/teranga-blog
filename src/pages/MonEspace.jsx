import { Navigate, useOutletContext } from "react-router";

export default function MonEspace() {
  const { connecte, setConnecte, favoris } = useOutletContext();

  if (!connecte) return <Navigate to="/connexion" replace />;

  return (
    <section>
      <h1>Mon espace</h1>
      <p>Vous avez {favoris.length} article(s) en favori.</p>
      <button onClick={() => setConnecte(false)}>Se déconnecter</button>
    </section>
  );
}