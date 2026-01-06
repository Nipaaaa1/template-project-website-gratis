import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <p className="text-gray-600 leading-relaxed">
        Aku seorang illustrator freelance dengan pengalaman
        mengerjakan character design, cover art, dan visual untuk
        berbagai kebutuhan digital. Gaya ilustrasiku banyak
        terinspirasi dari fantasy dan anime.
      </p>
    </div>
  )
}