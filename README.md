# React Modal HRnet

Un composant Modal React simple, réutilisable et personnalisable pour vos applications web. Ce composant offre une solution élégante pour afficher des messages, des confirmations ou tout type de contenu dans une fenêtre modale.

## Caractéristiques

- 🎯 Simple d'utilisation
- 🎨 Personnalisable
- ♿ Accessible (conforme aux normes WCAG)
- 📱 Responsive
- 🎭 Animations fluides
- 🔒 Gestion du focus et de la navigation au clavier

## Installation

```bash
npm install @pacifister/react-modal-hrnet
```

## Utilisation

```jsx
import Modal from '@pacifister/react-modal-hrnet';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      message="Votre message ici"
    />
  );
}
```

## Props

### Props obligatoires

- `isOpen` (boolean)

  - Contrôle la visibilité de la modal
  - `true` : la modal est affichée
  - `false` : la modal est masquée

- `onClose` (function)

  - Fonction appelée lorsque la modal doit être fermée
  - Déclenchée lors du clic sur le bouton de fermeture ou en dehors de la modal
  - Doit mettre à jour l'état `isOpen` à `false`

- `message` (string | ReactNode)
  - Contenu à afficher dans la modal
  - Peut être une simple chaîne de caractères ou un composant React

### Props optionnelles

- `title` (string | ReactNode, optionnel)

  - Titre de la modal
  - Par défaut : "Information"

- `closeButton` (boolean, optionnel)

  - Affiche ou masque le bouton de fermeture
  - Par défaut : `true`

- `overlayClick` (boolean, optionnel)

  - Permet ou non la fermeture de la modal en cliquant sur l'overlay
  - Par défaut : `true`

- `className` (string, optionnel)
  - Classe CSS personnalisée pour la modal
  - Permet de personnaliser le style de la modal

## Exemple complet

```jsx
import Modal from '@pacifister/react-modal-hrnet';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      message="Votre message ici"
      title="Titre personnalisé"
      closeButton={true}
      overlayClick={true}
      className="ma-classe-personnalisee"
    />
  );
}
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

MIT
