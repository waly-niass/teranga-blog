import ArticleCard from "../components/ArticleCard";
import { articlesDeTest } from "../donnees-test";

// Page d'accueil : présentation et les derniers articles.
export default function Accueil() {
  return (
    <section>
      <h1>Derniers articles</h1>
      <ArticleCard article={articlesDeTest[0]} />
      <ArticleCard article={articlesDeTest[1]} />
      <ArticleCard article={articlesDeTest[2]} />
    </section>
  );
}