import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { HttpAdapterProvider } from './context/HttpAdapter/http-adapter-context.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}> 
        <HttpAdapterProvider>
          <App />
        </HttpAdapterProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
