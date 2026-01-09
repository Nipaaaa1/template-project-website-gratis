import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About" }
    ]
  })
})

function AboutPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-24 max-w-2xl grid gap-12 md:grid-cols-2">
	<img className="aspect-square size-full rounded-md shadow-md" src="/nara_wijaya.webp" alt="" />
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
