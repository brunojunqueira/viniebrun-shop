import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Header'

import { mainTheme } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={mainTheme}>
      <Header />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
