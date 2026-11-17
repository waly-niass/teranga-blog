import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { articlesDeTest } from "../donnees-test";

// Page d'accueil : présentation et les derniers articles.
export default function Accueil() {
  const [favoris, setFavoris] = useState([]);

  function basculerFavori(article) {
    setFavoris((prev) =>
      prev.some((f) => f.id === article.id)
        ? prev.filter((f) => f.id !== article.id)
        : [...prev, article]
    );
  }

  function estFavori(article) {
    return favoris.some((f) => f.id === article.id);
  }

  return (
    <section>
      <h1>Derniers articles</h1>
      <p>Favoris : {favoris.length}</p>
      <ArticleCard article={articlesDeTest[0]} estFavori={estFavori(articlesDeTest[0])} onBasculerFavori={basculerFavori} />
      <ArticleCard article={articlesDeTest[1]} estFavori={estFavori(articlesDeTest[1])} onBasculerFavori={basculerFavori} />
      <ArticleCard article={articlesDeTest[2]} estFavori={estFavori(articlesDeTest[2])} onBasculerFavori={basculerFavori} />
    </section>
  );
}