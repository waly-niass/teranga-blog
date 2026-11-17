import ArticleCard from "./ArticleCard";

// Liste de cartes. Props : articles (tableau), favoris (tableau), onBasculerFavori (fonction).
export default function ListeArticles({ articles, favoris, onBasculerFavori }) {
  return (
    <div className="liste-articles">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          estFavori={favoris.some((f) => f.id === article.id)}
          onBasculerFavori={onBasculerFavori}
        />
      ))}
    </div>
  );
}