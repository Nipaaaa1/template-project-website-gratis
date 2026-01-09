import { X } from 'lucide-react'
import { useState } from 'react'

const images = Array.from({ length: 5 }).map(
  (_, i) => `/illust${i + 1}.webp`
)

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid md:grid-cols-3 gap-4">
        {images.map((src) => (
          <button
            key={src}
            onClick={() => setSelectedImage(src)}
            className="aspect-square overflow-hidden rounded-lg bg-gray-200"
          >
            <img
              src={src}
              alt="Artwork"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-sm hover:underline"
            >
              <X size={20} />
            </button>

            <img
              src={selectedImage}
              alt="Artwork preview"
              className="size-max mx-auto max-h-96 rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Gallery
