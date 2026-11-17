import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import EtatRequete from "../components/EtatRequete";
import ListeCommentaires from "../components/ListeCommentaires";
import CommentaireForm from "../components/CommentaireForm";

export default function Article({ id }) {
  const [article, setArticle] = useState(null);
  const [commentaires, setCommentaires] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function charger() {
      setChargement(true);
      setErreur(null);
      try {
        const [rA, rC] = await Promise.all([
          fetch(`${API_URL}/posts/${id}`, { signal: controller.signal }),
          fetch(`${API_URL}/posts/${id}/comments`, { signal: controller.signal }),
        ]);
        if (!rA.ok || !rC.ok) throw new Error("Introuvable");
        setArticle(await rA.json());
        setCommentaires(await rC.json());
      } catch (e) {
        if (e.name !== "AbortError") setErreur("Article introuvable ou erreur réseau.");
      } finally {
        if (!controller.signal.aborted) setChargement(false);
      }
    }
    charger();
    return () => controller.abort();
  }, [id]);

  function ajouter(commentaire) {
    setCommentaires((prev) => [...prev, commentaire]);
  }

  return (
    <EtatRequete chargement={chargement} erreur={erreur}>
      {article && (
        <article>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
          <h2>Commentaires</h2>
          <ListeCommentaires commentaires={commentaires} />
          <CommentaireForm onAjouter={ajouter} />
        </article>
      )}
    </EtatRequete>
  );
}