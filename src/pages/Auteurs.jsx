import { useEffect, useState } from "react";
import { Link } from "react-router";
import { API_URL } from "../constants";
import EtatRequete from "../components/EtatRequete";

export default function Auteurs() {
  const [auteurs, setAuteurs] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function charger() {
      try {
        const res = await fetch(`${API_URL}/users`, { signal: controller.signal });
        if (!res.ok) throw new Error(`Erreur ${res.status}`);
        setAuteurs(await res.json());
      } catch (e) {
        if (e.name !== "AbortError") setErreur("Impossible de charger les auteurs.");
      } finally {
        if (!controller.signal.aborted) setChargement(false);
      }
    }
    charger();
    return () => controller.abort();
  }, []);

  return (
    <section>
      <h1>Auteurs</h1>
      <EtatRequete chargement={chargement} erreur={erreur}>
        <ul>
          {auteurs.map((u) => (
            <li key={u.id}>
              <Link to={`/auteurs/${u.id}`}>{u.name}</Link> ({u.company.name})
            </li>
          ))}
        </ul>
      </EtatRequete>
    </section>
  );
}