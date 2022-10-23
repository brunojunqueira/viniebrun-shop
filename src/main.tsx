import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App'

import Header from './components/Header'

import { mainTheme } from './theme'
import { CartProvider } from './contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={mainTheme}>
      <CartProvider>
        <Header />
        <App />
      </CartProvider>
    </ChakraProvider>
  </React.StrictMode>
)