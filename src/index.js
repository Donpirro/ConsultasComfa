import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import './tailwind.css'; // Asegúrate de que este archivo exista o ajusta la ruta

const CLIENT_ID = "713938049134-k8bdhstgir1tobkk7j0nu1man4hg2sm2.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <AuthProvider>
      <BrowserRouter>
        {/* <React.StrictMode> */}
          <App />
        {/* </React.StrictMode> */}
      </BrowserRouter>
    </AuthProvider>
  </GoogleOAuthProvider>
);