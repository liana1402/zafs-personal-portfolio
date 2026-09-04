import { Outlet, createRootRoute } from '@tanstack/react-router'

import '../styles.css'
import Navbar from '#/components/navbar'
import Footer from '#/components/footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
