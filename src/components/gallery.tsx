import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

const images = Array.from({ length: 5 }).map(
  (_, i) => `/illust${i + 1}.webp`
)

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
  if (selectedImage) {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollBarWidth}px`
  } else {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }

  return () => {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
}, [selectedImage])

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {images.map((src) => (
          <button
            key={src}
            onClick={() => setSelectedImage(src)}
            className="overflow-hidden rounded-lg bg-gray-200 shadow-md hover:shadow-2xl transition-all ease-in-out"
          >
            <img
              src={src}
              alt="Artwork"
              className="size-full object-cover hover:scale-105 transition-transform"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 p-1 bg-gray-950 rounded-full text-white text-sm hover:bg-gray-950/50 transition ease-in-out"
            >
              <X size={16} />
            </button>

            <img
              src={selectedImage}
              alt="Artwork preview"
              className="max-w-4xl w-full h-max mx-auto md:w-max md:h-full md:max-h-200 rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
