import { Camera, Maximize2 } from 'lucide-react';
import { useState } from 'react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/1382394/pexels-photo-1382394.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Lush organic vegetable field',
    category: 'Farm',
    size: 'large',
  },
  {
    src: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fresh organic tomatoes',
    category: 'Produce',
    size: 'small',
  },
  {
    src: 'https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Organic root vegetables',
    category: 'Produce',
    size: 'small',
  },
  {
    src: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Sunflower field',
    category: 'Farm',
    size: 'medium',
  },
  {
    src: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fresh organic greens',
    category: 'Produce',
    size: 'medium',
  },
  {
    src: 'https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Organic farm landscape',
    category: 'Farm',
    size: 'large',
  },
  {
    src: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Green crop leaves',
    category: 'Crops',
    size: 'small',
  },
  {
    src: 'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Colorful organic vegetables',
    category: 'Produce',
    size: 'small',
  },
  {
    src: 'https://images.pexels.com/photos/1448735/pexels-photo-1448735.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fresh herbs',
    category: 'Products',
    size: 'medium',
  },
];

const categories = ['All', 'Farm', 'Produce', 'Crops', 'Products'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-forest-50 text-forest-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Camera className="w-4 h-4" />
            Gallery
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Life at{' '}
            <span className="text-forest-600">Ganesh Organic</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            A visual journey through our farm, products, and the communities we serve.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-forest-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-forest-50 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl break-inside-avoid cursor-pointer"
              onClick={() => setLightbox(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex items-center justify-between w-full">
                  <div>
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                    <span className="text-white/70 text-xs">{image.category}</span>
                  </div>
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
