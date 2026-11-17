import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { API_URL } from "../constants";
import BarreRecherche from "../components/BarreRecherche";
import ListeArticles from "../components/ListeArticles";
import EtatRequete from "../components/EtatRequete";

export default function Articles() {
  const { favoris, basculerFavori } = useOutletContext();
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [recherche, setRecherche] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function charger() {
      try {
        const res = await fetch(`${API_URL}/posts?_limit=12`, { signal: controller.signal });
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

  const visibles = articles.filter((a) =>
    a.title.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <section>
      <h1>Articles</h1>
      <BarreRecherche valeur={recherche} onChange={setRecherche} />
      <EtatRequete chargement={chargement} erreur={erreur}>
        <ListeArticles articles={visibles} favoris={favoris} onBasculerFavori={basculerFavori} />
      </EtatRequete>
    </section>
  );
}