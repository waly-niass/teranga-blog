import { Link } from "react-router";

export default function ArticleCard({ article, estFavori, onBasculerFavori }) {
  return (
    <article className="carte">
      <h3>
        <Link to={`/articles/${article.id}`}>{article.title}</Link>
      </h3>
      <p>{article.body.slice(0, 80)}…</p>
      <button onClick={() => onBasculerFavori(article)}>
        {estFavori ? "★ Retirer des favoris" : "☆ Ajouter aux favoris"}
      </button>
    </article>
  );
}