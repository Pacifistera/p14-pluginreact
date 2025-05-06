# React Modal HRnet

Un composant Modal React simple et réutilisable.

## Installation

```bash
npm install @maxdev/react-modal-hrnet
```

## Utilisation

```jsx
import Modal from '@maxdev/react-modal-hrnet';

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

- `isOpen` (boolean): Contrôle la visibilité de la modal
- `onClose` (function): Fonction appelée à la fermeture
- `message` (string|node): Contenu à afficher
