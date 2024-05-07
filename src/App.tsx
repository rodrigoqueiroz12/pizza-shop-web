import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './context/ThemeContext'
import { queryClient } from './lib/react-query'
import { router } from './routes'

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="pizza.shop-theme">
        <Helmet titleTemplate="%s | pizza.shop" />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>

        <Toaster />
      </ThemeProvider>
    </HelmetProvider>
  )
}
