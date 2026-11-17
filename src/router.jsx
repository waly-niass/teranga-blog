import { createBrowserRouter } from "react-router";
import LayoutPrincipal from "./layouts/LayoutPrincipal";
import Accueil from "./pages/Accueil";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Auteurs from "./pages/Auteurs";
import Auteur from "./pages/Auteur";
import Favoris from "./pages/Favoris";
import Introuvable from "./pages/Introuvable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPrincipal />,
    children: [
      { index: true, element: <Accueil /> },
      { path: "articles", element: <Articles /> },
      { path: "articles/:id", element: <Article /> },
      { path: "auteurs", element: <Auteurs /> },
      { path: "auteurs/:id", element: <Auteur /> },
      { path: "favoris", element: <Favoris /> },
      { path: "*", element: <Introuvable /> },
    ],
  },
]);