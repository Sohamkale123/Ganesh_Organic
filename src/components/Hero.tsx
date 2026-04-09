import { ArrowDown, Leaf, Sun, Droplets } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-forest-950/80 via-forest-900/70 to-forest-800/60" />

      <div className="absolute top-20 left-10 w-64 h-64 bg-forest-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
          <Leaf className="w-4 h-4 text-forest-300" />
          <span className="text-sm text-white/90 font-medium">100% Certified Organic</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Ganesh{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-300 to-earth-300">
            Organic
          </span>
        </h1>

        <p className="text-2xl sm:text-3xl text-earth-300 font-semibold mb-4">
          Healthy Crops, Healthy Life
        </p>

        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Empowering farmers across Junnar with nature-driven solutions — organic fertilizers,
          bio-tonics, and sustainable farming practices for a greener tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="px-8 py-4 bg-forest-500 hover:bg-forest-400 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-forest-500/30 hover:-translate-y-0.5"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Our Story
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { icon: Leaf, label: 'Organic', value: '100%' },
            { icon: Sun, label: 'Farmers Served', value: '500+' },
            { icon: Droplets, label: 'Products', value: '20+' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-2 border border-white/20">
                <Icon className="w-6 h-6 text-forest-300" />
              </div>
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-sm text-white/70">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
