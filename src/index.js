import React, { Suspense } from 'react';
import { render } from 'react-dom';
import './css/reset.css';
import { Main } from './pages/Main';
import { Presale } from './pages/Presale';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './i18n';

render(
  <React.StrictMode>

    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/presale" element={<Presale />} />
        </Routes>
      </BrowserRouter>
    </Suspense>

  </React.StrictMode>,
  document.getElementById('project-202-root')
);
