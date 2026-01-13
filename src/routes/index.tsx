import { createFileRoute } from '@tanstack/react-router'
import Gallery from '../components/gallery'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Home | Nara Wijaya" }
    ]
  })
})

function HomePage() {
  return (
    <>
      <div>
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nara Wijaya
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
	    Ilustrator lepas dengan gaya vintage dan klasik untuk karya visual yang timeless dan berkarakter.
          </p>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Karya Pilihan
          </h2>
          <Gallery />
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Mari berkolaborasi
            </h2>
            <p className="text-gray-600 mb-6">
              Tertarik bekerja sama atau ingin memesan komisi?
            </p>
            <a
              href="mailto:hello@narawijaya.com"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:opacity-90"
            >
              Hubungi Saya
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
