import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './tailwind.css'; // Asegúrate de importar TailwindCSS

// Selecciona el contenedor raíz de la aplicación
const container = document.getElementById('root');

// Crea una raíz para toda la aplicación
const root = createRoot(container);

const clientId = '713938049134-k8bdhstgir1tobkk7j0nu1man4hg2sm2.apps.googleusercontent.com';

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);