import { useState } from "react";
import Articles from "./Articles";
import Article from "./Article";
import Auteurs from "./Auteurs";
import Auteur from "./Auteur";

export default function Accueil() {
  const [id, setId] = useState(1);
  return (
    <>
      <button onClick={() => setId(id + 1)}>Suivant (id {id})</button>
      <button onClick={() => setId(999)}>Id inexistant</button>
      <Articles />
      <Article id={id} />
      <Auteurs />
      <Auteur id={id} />
    </>
  );
}