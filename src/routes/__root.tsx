import { createRootRoute, HeadContent, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => {
  return (
    <>
    <HeadContent />
    <div className="min-h-screen flex flex-col relative">
      <header className="sticky top-0 w-full shadow-2xl z-10 bg-white">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <Link to="/" className="text-lg font-bold flex gap-2 items-center">
            <img className="size-8 bg-gray-800 rounded-md" src="/favicon-32x32.png" alt="Nara Wijaya Logo" />
            <span>Nara Wijaya</span>
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
        © {new Date().getFullYear()} Nara Wijaya. All rights reserved.
      </footer>
    </div>
    <TanStackRouterDevtools />
    </>
  )
}

export const Route = createRootRoute({ component: RootLayout })