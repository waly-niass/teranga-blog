# Teranga Blog

Teranga Blog est un mini-blog multipage. Une barre de navigation reste toujours visible et la zone centrale change selon l'adresse (accueil, articles, détail d'un article avec commentaires, auteurs, favoris, page 404). Les données viennent de l'API JSONPlaceholder, chargées avec `useEffect` et `fetch`. J'ai appris à composer des composants avec des props, à gérer l'état, à charger des données distantes et à naviguer avec React Router.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173/

## Trois choses que j'ai apprises

### 1. Pourquoi les favoris vivent dans le layout


C'est la règle de la remontée d'état : l'état doit vivre dans le premier ancêtre commun de tous ceux qui en ont besoin. Ici, plusieurs endroits utilisent les favoris :

la barre de navigation (le compteur)
les cartes d'articles (le bouton)
la page Favoris

Le layout est le seul parent commun à tous. Si l'état était dans une page, il serait détruit dès que je change de route, puisque cette page est démontée. Le layout, lui, reste monté : seules les pages sont remplacées dans l'Outlet. Il transmet l'état aux pages via useOutletContext. Une carte ne garde pas les favoris : elle reçoit seulement « suis-je favori ? » et une fonction à appeler.

### 2. À quoi sert le `return` de `useEffect`
C'est la fonction de nettoyage. React l'exécute avant de relancer l'effet (quand une dépendance change) et aussi quand le composant disparaît (au démontage). Par exemple, si je passe vite d'un article à un autre, la réponse du premier, plus lente, peut arriver après celle du second et l'écraser. Le nettoyage annule l'ancienne requête (avec AbortController), donc seule la dernière réponse compte. Sans ce return, je risque des réponses périmées, voire des mises à jour d'un composant disparu.

### 3. Pourquoi `id` est une chaîne avec `useParams`
Une URL n'est que du texte : dans /articles/3, le 3 est la chaîne "3". useParams renvoie toujours des chaînes. Comparer "3" === 3 donne false. Il faut donc convertir la valeur avant de la comparer à un id numérique, par exemple Number(id) === article.id.