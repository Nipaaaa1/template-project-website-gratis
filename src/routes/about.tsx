import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | Nara Wijaya" }
    ]
  })
})

function AboutPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-24 max-w-2xl grid gap-12">
        <img className="aspect-square rounded-md size-full md:size-64 shadow-xl" src="/nara_wijaya.webp" alt="" />
        <div className="w-full h-max space-y-6">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="text-gray-600 leading-relaxed">
            Aku seorang illustrator freelance dengan pengalaman mengerjakan character design, cover art, dan visual untuk berbagai kebutuhan digital. Gaya ilustrasiku banyak terinspirasi dari fantasy dan anime.
          </p>
        </div>
      </div>
    </>
  )
}
