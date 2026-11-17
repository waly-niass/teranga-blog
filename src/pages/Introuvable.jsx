import { Link } from "react-router";

export default function Introuvable() {
  return (
    <section>
      <h1>404 : page introuvable</h1>
      <Link to="/">Retour à l'accueil</Link>
    </section>
  );
}