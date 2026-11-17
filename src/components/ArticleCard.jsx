// Carte d'un article.
// Props : article (id, title, body), estFavori (booléen), onBasculerFavori (fonction).
export default function ArticleCard({ article, estFavori, onBasculerFavori }) {
  return (
    <article className="carte">
      <h3>{article.title}</h3>
      <p>{article.body.slice(0, 80)}…</p>
      <button onClick={() => onBasculerFavori(article)}>
        {estFavori ? "★ Retirer des favoris" : "☆ Ajouter aux favoris"}
      </button>
    </article>
  );
}