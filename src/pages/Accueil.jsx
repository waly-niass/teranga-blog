import { useState } from "react";
import ListeArticles from "../components/ListeArticles";
import BarreRecherche from "../components/BarreRecherche";
import { articlesDeTest } from "../donnees-test";

// Page d'accueil : présentation et les derniers articles.
export default function Accueil() {
  const [favoris, setFavoris] = useState([]);
  const [recherche, setRecherche] = useState("");

  function basculerFavori(article) {
    setFavoris((prev) =>
      prev.some((f) => f.id === article.id)
        ? prev.filter((f) => f.id !== article.id)
        : [...prev, article]
    );
  }

  const visibles = articlesDeTest.filter((a) =>
    a.title.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <section>
      <h1>Derniers articles</h1>
      <p>Favoris : {favoris.length}</p>
      <BarreRecherche valeur={recherche} onChange={setRecherche} />
      <ListeArticles
        articles={visibles}
        favoris={favoris}
        onBasculerFavori={basculerFavori}
      />
    </section>
  );
}