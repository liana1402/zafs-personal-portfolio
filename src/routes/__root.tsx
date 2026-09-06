import { Outlet, createRootRoute } from '@tanstack/react-router'

import '../styles.css'
import Navbar from '#/components/navbar'
import Footer from '#/components/footer'
import ErrorPage from '#/components/error-page'

export const Route = createRootRoute({
  errorComponent: ErrorPage,
  notFoundComponent: ErrorPage,
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
