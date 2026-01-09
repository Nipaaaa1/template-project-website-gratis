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
          <h1 className="text-3xl font-bold">Tentang Saya</h1>
          <p className="text-gray-600 leading-relaxed">
            Saya seorang ilustrator lepas dengan pengalaman mengerjakan desain karakter, cover art, dan ilustrasi untuk berbagai kebutuhan digital. Gaya ilustrasi saya banyak terinspirasi oleh dunia fantasi dan anime.
          </p>
        </div>
      </div>
    </>
  )
}
