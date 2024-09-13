import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodosProvider } from './store/todos.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodosProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodosProvider>
  </StrictMode>,
)
