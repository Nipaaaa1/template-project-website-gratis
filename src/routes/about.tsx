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
          <h1 className="text-3xl font-bold">Tentang Nara</h1>
          <p className="text-gray-600 leading-relaxed">
	    Nara Wijaya adalah ilustrator lepas yang berfokus pada gaya ilustrasi vintage dan klasik, dengan inspirasi dari botanical illustration, engraving, serta ilustrasi komersial era mid-century. Ia berpengalaman mengerjakan cover art, poster, ilustrasi editorial, dan berbagai kebutuhan digital dengan sentuhan retro yang elegan dan detail yang kuat. Dalam setiap karyanya, Nara menekankan komposisi, tekstur, dan palet warna yang lembut untuk menghadirkan nuansa timeless yang berkarakter.
	  </p>
        </div>
      </div>
    </>
  )
}
