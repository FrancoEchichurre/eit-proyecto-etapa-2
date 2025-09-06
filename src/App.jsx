import AppRoutes from './routes/AppRoutes'
import CartProvider from './context/CartProvider' // Ajusta la ruta según tu estructura

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  )
}

export default App