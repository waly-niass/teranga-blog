import { useState } from "react";


export default function CommentaireForm({ onAjouter }) {
  const [nom, setNom] = useState("");
  const [message, setMessage] = useState("");
  const [erreur, setErreur] = useState("");

  function soumettre(e) {
    e.preventDefault();
    if (nom.trim() === "") {
      setErreur("Le nom est obligatoire.");
      return;
    }
    if (message.trim().length < 10) {
      setErreur("Le message doit contenir au moins 10 caractères.");
      return;
    }
    onAjouter({ id: `local-${Date.now()}`, name: nom.trim(), body: message.trim() });
    setNom("");
    setMessage("");
    setErreur("");
  }

  return (
    <form onSubmit={soumettre}>
      <input value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
      {erreur && <p className="erreur">{erreur}</p>}
      <button type="submit">Commenter</button>
    </form>
  );
}