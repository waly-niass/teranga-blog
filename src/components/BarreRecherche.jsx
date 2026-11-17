// Champ de recherche contrôlé. Props : valeur (chaîne), onChange (fonction qui reçoit la nouvelle chaîne).
export default function BarreRecherche({ valeur, onChange }) {
  return (
    <input
      type="search"
      placeholder="Rechercher par titre…"
      value={valeur}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}