import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <Link to="/" className="text-xl font-bold">
            Aruna Studio
          </Link>

          <div className="flex gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Aruna Studio. All rights reserved.
      </footer>
    </div>
    <TanStackRouterDevtools />
    </>
  )
}

export const Route = createRootRoute({ component: RootLayout })