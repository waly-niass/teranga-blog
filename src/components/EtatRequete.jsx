// Affiche le chargement, l'erreur, ou son contenu.
export default function EtatRequete({ chargement, erreur, children }) {
  if (chargement) return <p>Chargement…</p>;
  if (erreur) return <p className="erreur">{erreur}</p>;
  return children;
}