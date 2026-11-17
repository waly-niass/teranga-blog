import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router";

export default function LayoutPrincipal() {
  const [favoris, setFavoris] = useState([]);

  function basculerFavori(article) {
    setFavoris((prev) =>
      prev.some((f) => f.id === article.id)
        ? prev.filter((f) => f.id !== article.id)
        : [...prev, article]
    );
  }

  return (
    <>
      <header className="navbar">
        <Link to="/">
          <img src="/logo-teranga-blog.png" alt="Teranga Blog" className="logo" />
        </Link>
        <nav>
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/auteurs">Auteurs</NavLink>
          <NavLink to="/favoris">Favoris ({favoris.length})</NavLink>
        </nav>
      </header>
      <main>
        <Outlet context={{ favoris, basculerFavori }} />
      </main>
    </>
  );
}