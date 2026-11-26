import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/variables.scss';
import './styles/bootstrap-overrides.scss';
import './styles/global.scss';
import './styles/animations.scss';
import './styles/layering.scss';
import { i18nReady } from './i18n';
import App from './App.tsx';

void i18nReady.then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
