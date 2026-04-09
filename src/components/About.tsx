import { Heart, Sprout, Users, Shield } from 'lucide-react';

const values = [
  {
    icon: Sprout,
    title: 'Sustainability',
    description:
      'We practice and promote farming methods that protect natural resources for future generations.',
  },
  {
    icon: Shield,
    title: 'Eco-Friendly',
    description:
      'Every product we create is designed to work with nature, not against it — zero harmful chemicals.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description:
      'We uplift local farming communities through training, guidance, and affordable organic solutions.',
  },
  {
    icon: Heart,
    title: 'Farmer First',
    description:
      'Our mission is rooted in improving livelihoods — healthier crops mean healthier incomes.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-forest-50 text-forest-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Sprout className="w-4 h-4" />
              Our Story
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Rooted in Nature,{' '}
              <span className="text-forest-600">Grown with Purpose</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ganesh Organic was born from a simple belief: that the land gives us everything we
                need, if only we care for it the right way. Founded in the fertile region of
                Golegaon, Junnar, our farm has been a living laboratory for sustainable, chemical-free
                agriculture for over a decade.
              </p>
              <p>
                What started as a small family operation has grown into a trusted name across
                Maharashtra — providing farmers with high-quality organic fertilizers, bio-tonics,
                and integrated pest management solutions that actually work.
              </p>
              <p>
                We don't just sell products. We partner with farmers, walk their fields, and stand
                beside them through every season. Our team of agronomists and organic farming
                experts offer guidance rooted in traditional wisdom and modern science.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-forest-600 hover:bg-forest-700 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                Work With Us
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-forest-200 hover:border-forest-400 text-forest-700 font-semibold rounded-full transition-all duration-300"
              >
                View Products
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2165764/pexels-photo-2165764.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Farmer in organic field"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-earth-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-forest-100 rounded-full -z-10" />

            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-forest-100 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-forest-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Trusted Since 2012</div>
                <div className="text-xs text-gray-500">Golegaon, Junnar</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 bg-gradient-to-br from-forest-50 to-white border border-forest-100 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-forest-600 group-hover:bg-forest-700 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
