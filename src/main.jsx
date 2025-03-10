import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ProjectDetail from './pages/projecctDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
