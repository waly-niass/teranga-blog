// Liste de commentaires. Prop : commentaires (tableau avec id, name, body).
export default function ListeCommentaires({ commentaires }) {
  return (
    <ul>
      {commentaires.map((c) => (
        <li key={c.id}>
          <strong>{c.name}</strong>
          <p>{c.body}</p>
        </li>
      ))}
    </ul>
  );
}