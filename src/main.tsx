import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App'
import Service from './pages/service'

import Header from './components/Header'

import { mainTheme } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={mainTheme}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path={'/'}
            element={<App/>}
          />
          <Route
            path={'/atendimento'}
            element={<Service/>}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
