import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { API_URL } from "../constants";
import ListeArticles from "../components/ListeArticles";
import EtatRequete from "../components/EtatRequete";

export default function Accueil() {
  const { favoris, basculerFavori } = useOutletContext();
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function charger() {
      try {
        const res = await fetch(`${API_URL}/posts?_limit=3`, { signal: controller.signal });
        if (!res.ok) throw new Error(`Erreur ${res.status}`);
        setArticles(await res.json());
      } catch (e) {
        if (e.name !== "AbortError") setErreur("Impossible de charger les articles.");
      } finally {
        if (!controller.signal.aborted) setChargement(false);
      }
    }
    charger();
    return () => controller.abort();
  }, []);

  return (
    <section>
      <h1>Derniers articles</h1>
      <EtatRequete chargement={chargement} erreur={erreur}>
        <ListeArticles articles={articles} favoris={favoris} onBasculerFavori={basculerFavori} />
      </EtatRequete>
    </section>
  );
}