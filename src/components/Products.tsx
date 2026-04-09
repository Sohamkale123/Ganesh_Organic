import { Leaf, FlaskConical, Bug, Zap, Star, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    category: 'Organic Fertilizer',
    icon: Leaf,
    name: 'GreenGold Compost',
    tagline: 'Nature\'s Best Soil Builder',
    description:
      'A premium blend of aged organic matter, cow dung manure, and vermicompost. Enriches soil structure, improves water retention, and boosts microbial activity.',
    features: ['NPK balanced', 'Improves soil texture', 'Enhances root growth'],
    image:
      'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Bestseller',
    color: 'from-forest-600 to-forest-700',
  },
  {
    id: 2,
    category: 'Bio-Tonic',
    icon: FlaskConical,
    name: 'BioVita Growth Tonic',
    tagline: 'Boost Crop Vitality Naturally',
    description:
      'A powerful liquid bio-stimulant derived from seaweed extracts and beneficial microbes. Accelerates germination, flowering, and fruit development.',
    features: ['Ready-to-spray formula', 'Faster germination', 'Improves yield 30%+'],
    image:
      'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'New',
    color: 'from-earth-600 to-earth-700',
  },
  {
    id: 3,
    category: 'Pest Control',
    icon: Bug,
    name: 'NaturShield Pest Guard',
    tagline: 'Chemical-Free Crop Protection',
    description:
      'An organic pest management solution using neem oil, garlic extracts, and botanical compounds. Effective against aphids, whiteflies, and fungal infections.',
    features: ['Non-toxic to humans', 'Safe for pollinators', 'Broad-spectrum control'],
    image:
      'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Popular',
    color: 'from-forest-700 to-forest-800',
  },
  {
    id: 4,
    category: 'Crop Enhancer',
    icon: Zap,
    name: 'SoilRevive Microbiome',
    tagline: 'Restore Soil Life & Balance',
    description:
      'A concentrated microbial inoculant with mycorrhizal fungi, rhizobium, and phosphate-solubilizing bacteria. Restores depleted soil and reduces fertilizer dependency.',
    features: ['5 beneficial microbes', 'Reduces input cost', 'Long-lasting effect'],
    image:
      'https://images.pexels.com/photos/1448735/pexels-photo-1448735.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Recommended',
    color: 'from-earth-700 to-earth-800',
  },
  {
    id: 5,
    category: 'Organic Fertilizer',
    icon: Leaf,
    name: 'VermiGold Premium',
    tagline: 'Pure Vermicompost Enrichment',
    description:
      'High-grade vermicompost produced from earthworm castings. Rich in humic acids, micronutrients, and plant growth hormones for exceptional crop performance.',
    features: ['Rich in humic acids', 'pH balancing', 'All crop types'],
    image:
      'https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
    color: 'from-forest-600 to-forest-700',
  },
  {
    id: 6,
    category: 'Bio-Tonic',
    icon: FlaskConical,
    name: 'RootMax Biostimulant',
    tagline: 'Deep Root Development Formula',
    description:
      'Specially formulated to enhance root biomass and lateral root development. Contains humic acid, fulvic acid, and amino acid complex for nutrient uptake optimization.',
    features: ['Enhanced root mass', 'Stress tolerance', 'Transplant recovery'],
    image:
      'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
    color: 'from-earth-600 to-earth-700',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-forest-50 text-forest-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <FlaskConical className="w-4 h-4" />
            Products & Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nature-Powered{' '}
            <span className="text-forest-600">Farm Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every product is crafted from nature's finest ingredients — tested on real farms,
            trusted by real farmers across Maharashtra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {product.badge && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-earth-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <div className={`bg-gradient-to-br ${product.color} p-2 rounded-lg`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-semibold text-forest-600 uppercase tracking-wider mb-1">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-earth-600 font-medium mb-3">{product.tagline}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{product.description}</p>

                  <div className="space-y-1.5 mb-5">
                    {product.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-forest-500 rounded-full flex-shrink-0" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 font-semibold text-sm group/link transition-colors"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-forest-600 hover:bg-forest-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-forest-500/20 hover:-translate-y-0.5"
          >
            Request Custom Solution
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
