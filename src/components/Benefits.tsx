import { Sprout, Shield, Droplets, Sun, TrendingUp, Globe, Recycle, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Sprout,
    title: 'Healthier Soil',
    description:
      'Organic practices rebuild soil microbiome, increase organic matter, and improve long-term soil fertility naturally.',
    color: 'bg-forest-100 text-forest-700',
    stat: '40%',
    statLabel: 'Better Soil Health',
  },
  {
    icon: Shield,
    title: 'Natural Pest Resistance',
    description:
      'Healthy soil and biodiversity naturally keep pest populations in balance, reducing the need for interventions.',
    color: 'bg-earth-100 text-earth-700',
    stat: '60%',
    statLabel: 'Fewer Pest Issues',
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description:
      'Organic soil retains water up to 3x better than chemically treated soil, cutting irrigation needs significantly.',
    color: 'bg-blue-100 text-blue-700',
    stat: '3x',
    statLabel: 'Better Water Retention',
  },
  {
    icon: Globe,
    title: 'Eco-Sustainability',
    description:
      'Organic farming reduces greenhouse gas emissions, protects watersheds, and promotes biodiversity.',
    color: 'bg-teal-100 text-teal-700',
    stat: '50%',
    statLabel: 'Less Carbon Footprint',
  },
  {
    icon: Heart,
    title: 'Safer Food',
    description:
      'Zero synthetic chemicals means produce free from toxic residues, protecting both farmers and consumers.',
    color: 'bg-rose-100 text-rose-700',
    stat: '0',
    statLabel: 'Chemical Residues',
  },
  {
    icon: TrendingUp,
    title: 'Better Crop Yield',
    description:
      'Properly managed organic farms often match or exceed conventional yields while reducing input costs.',
    color: 'bg-amber-100 text-amber-700',
    stat: '25%',
    statLabel: 'Lower Input Costs',
  },
  {
    icon: Sun,
    title: 'Resilient Crops',
    description:
      'Organically grown plants develop stronger cellular structures, making them more resistant to drought and disease.',
    color: 'bg-yellow-100 text-yellow-700',
    stat: '2x',
    statLabel: 'More Resilient',
  },
  {
    icon: Recycle,
    title: 'Circular Farming',
    description:
      'Organic systems recycle farm waste into valuable compost and nutrients, creating a self-sustaining ecosystem.',
    color: 'bg-lime-100 text-lime-700',
    stat: '80%',
    statLabel: 'Waste Recycled',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-forest-50 text-forest-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Globe className="w-4 h-4" />
            Why Go Organic
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Power of{' '}
            <span className="text-forest-600">Organic Farming</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of Indian farmers are making the switch — and how organic
            practices transform not just crops, but entire communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, description, color, stat, statLabel }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-forest-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50"
            >
              <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="mb-3">
                <span className="text-3xl font-bold text-gray-900">{stat}</span>
                <span className="block text-xs text-gray-500 mt-0.5">{statLabel}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl overflow-hidden relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/90 to-forest-700/70" />
          <div className="relative z-10 px-8 py-16 md:px-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Farm?
              </h3>
              <p className="text-forest-100 leading-relaxed">
                Join hundreds of farmers who've already experienced the Ganesh Organic difference.
                Healthier soil, better yields, lower costs — all naturally.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-white text-forest-700 font-semibold rounded-full hover:bg-forest-50 transition-colors text-center"
              >
                Talk to an Expert
              </a>
              <a
                href="#products"
                className="px-7 py-3.5 bg-forest-500/20 hover:bg-forest-500/30 text-white border border-white/30 font-semibold rounded-full transition-colors text-center"
              >
                See Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
