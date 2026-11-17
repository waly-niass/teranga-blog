// Carte d'un article.
// Props attendues : article (objet avec id, title, body), et plus tard estFavori, onBasculerFavori.
export default function ArticleCard({ article }) {
  return (
    <article className="carte">
      <h3>{article.title}</h3>
      <p>{article.body.slice(0, 80)}…</p>
    </article>
  );
}