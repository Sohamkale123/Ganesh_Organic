import { BookOpen, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    title: 'Top 5 Organic Fertilizers for Rabi Crops in Maharashtra',
    excerpt:
      'As winter season approaches, learn which organic fertilizers will give your wheat, chickpea, and onion crops the best start. Timing and application methods matter.',
    category: 'Seasonal Tips',
    date: 'November 12, 2024',
    readTime: '5 min read',
    image:
      'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Rabi Season',
  },
  {
    title: 'How to Build a Low-Cost Vermicompost Unit at Home',
    excerpt:
      'Vermicompost is liquid gold for crops. This step-by-step guide walks you through setting up a small-scale earthworm composting unit with minimal investment.',
    category: 'DIY Farming',
    date: 'October 28, 2024',
    readTime: '7 min read',
    image:
      'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Composting',
  },
  {
    title: 'Integrated Pest Management: A Complete Guide for Small Farmers',
    excerpt:
      'IPM combines biological, cultural, and physical controls to manage pests effectively. Discover how this approach reduces costs and eliminates chemical dependency.',
    category: 'Pest Management',
    date: 'October 14, 2024',
    readTime: '6 min read',
    image:
      'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'IPM',
  },
  {
    title: 'The Science Behind Microbial Inoculants and Soil Health',
    excerpt:
      'Modern organic farming is embracing soil biology. Learn how beneficial bacteria and fungi work together to create a thriving underground ecosystem for your crops.',
    category: 'Science & Innovation',
    date: 'September 30, 2024',
    readTime: '8 min read',
    image:
      'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Soil Science',
  },
  {
    title: 'Water-Smart Farming: Saving 40% on Irrigation Costs',
    excerpt:
      'Drip irrigation, mulching, and organic soil amendments can dramatically cut water usage. Real results from Junnar farms that made the switch.',
    category: 'Water Management',
    date: 'September 15, 2024',
    readTime: '5 min read',
    image:
      'https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Irrigation',
  },
  {
    title: 'Organic Certification in India: Your 2025 Step-by-Step Guide',
    excerpt:
      'Getting your farm certified organic opens doors to premium markets. We break down the PGS-India and NPOP certification processes, costs, and timelines.',
    category: 'Certification',
    date: 'September 1, 2024',
    readTime: '10 min read',
    image:
      'https://images.pexels.com/photos/1448735/pexels-photo-1448735.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Certification',
  },
];

const categoryColors: Record<string, string> = {
  'Seasonal Tips': 'bg-forest-100 text-forest-700',
  'DIY Farming': 'bg-earth-100 text-earth-700',
  'Pest Management': 'bg-red-100 text-red-700',
  'Science & Innovation': 'bg-blue-100 text-blue-700',
  'Water Management': 'bg-cyan-100 text-cyan-700',
  Certification: 'bg-amber-100 text-amber-700',
};

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-forest-50 text-forest-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            Blog & Updates
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Farming Knowledge{' '}
            <span className="text-forest-600">Hub</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest in organic farming, seasonal crop care, and sustainable
            agriculture innovations from our expert team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      categoryColors[post.category] || 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug group-hover:text-forest-700 transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Tag className="w-3 h-3" />
                    {post.tag}
                  </span>
                  <button className="flex items-center gap-1 text-forest-600 hover:text-forest-700 text-sm font-semibold transition-colors group/link">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-forest-200 hover:border-forest-400 text-forest-700 font-semibold rounded-full transition-all duration-300 hover:bg-forest-50">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
