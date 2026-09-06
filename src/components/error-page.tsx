import { Link } from '@tanstack/react-router'

function ErrorPage() {
  return (
    <main className="flex min-h-body-height flex-col items-center justify-center gap-5 px-5 text-center">
      <p className="text-8xl font-bold text-dark-green">404</p>
      <h1 className="text-3xl font-bold text-dark-green">Page not found</h1>
      <p className="max-w-md text-custom-black">
        The page you are looking for does not exist or is no longer available.
      </p>
      <Link
        to="/"
        className="rounded-lg bg-custom-white px-5 py-3 text-dark-green hover:bg-custom-black hover:text-custom-white"
      >
        Back to home
      </Link>
    </main>
  )
}

export default ErrorPage
