// == Import
// Externe
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// == Import
// Interne
import App from 'src/components/App';

// == Render
// l'App est entourée de BRowserRouter pour React-Router-Dom
const rootReactElement = (

  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
