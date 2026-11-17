import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import EtatRequete from "../components/EtatRequete";

export default function Auteur({ id }) {
  const [auteur, setAuteur] = useState(null);
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function charger() {
      setChargement(true);
      setErreur(null);
      try {
        const [rU, rP] = await Promise.all([
          fetch(`${API_URL}/users/${id}`, { signal: controller.signal }),
          fetch(`${API_URL}/posts?userId=${id}`, { signal: controller.signal }),
        ]);
        if (!rU.ok || !rP.ok) throw new Error("Introuvable");
        setAuteur(await rU.json());
        setArticles(await rP.json());
      } catch (e) {
        if (e.name !== "AbortError") setErreur("Auteur introuvable ou erreur réseau.");
      } finally {
        if (!controller.signal.aborted) setChargement(false);
      }
    }
    charger();
    return () => controller.abort();
  }, [id]);

  return (
    <EtatRequete chargement={chargement} erreur={erreur}>
      {auteur && (
        <section>
          <h1>{auteur.name}</h1>
          <p>{auteur.email} · {auteur.company.name}</p>
          <h2>Ses articles</h2>
          <ul>
            {articles.map((p) => (
              <li key={p.id}>{p.title}</li>
            ))}
          </ul>
        </section>
      )}
    </EtatRequete>
  );
}