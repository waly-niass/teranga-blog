import { useOutletContext } from "react-router";
import ListeArticles from "../components/ListeArticles";

export default function Favoris() {
  const { favoris, basculerFavori } = useOutletContext();
  return (
    <section>
      <h1>Mes favoris</h1>
      {favoris.length === 0 ? (
        <p>Aucun favori pour le moment.</p>
      ) : (
        <ListeArticles articles={favoris} favoris={favoris} onBasculerFavori={basculerFavori} />
      )}
    </section>
  );
}