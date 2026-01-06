import { createFileRoute } from '@tanstack/react-router'
import Gallery from '../components/gallery'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Home" }
    ]
  })
})

function HomePage() {
  return (
    <>
      <div>
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, aku Aruna 👋
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Illustrator yang fokus ke character design, fantasy art,
            dan visual storytelling.
          </p>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Selected Works
          </h2>
          <Gallery />
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Let’s work together
            </h2>
            <p className="text-gray-600 mb-6">
              Tertarik kolaborasi atau mau commission?
            </p>
            <a
              href="mailto:hello@arunastudio.com"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:opacity-90"
            >
              Contact Me
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
