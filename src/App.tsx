import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/cart'

import Home from './pages/home'
import Service from './pages/service'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          element={<Home/>}
        />
        <Route
          path={'/atendimento'}
          element={<Service/>}
        />
        <Route
          path={'/carrinho'}
          element={<Cart/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
