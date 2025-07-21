import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './hooks/useAuth.jsx'
import {BrowserRouter} from "react-router-dom"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider> 
        <div className="app-container">
          <App /> 
        </div>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
)
