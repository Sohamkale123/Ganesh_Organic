import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ramesh Chavan',
    location: 'Junnar, Pune',
    crop: 'Tomatoes & Onions',
    image:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'I switched to Ganesh Organic\'s GreenGold Compost last season and the difference was remarkable. My tomato plants were healthier, the yield improved by 35%, and I spent almost nothing on pesticides. I\'ll never go back to chemical fertilizers.',
  },
  {
    name: 'Sunita Jadhav',
    location: 'Otur, Junnar',
    crop: 'Wheat & Soybean',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'The team at Ganesh Organic didn\'t just sell me products — they visited my farm, assessed the soil, and gave a complete treatment plan. My wheat crop this year was the best I\'ve had in 20 years of farming.',
  },
  {
    name: 'Vijay Thorat',
    location: 'Manchar, Pune',
    crop: 'Grapes & Pomegranate',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Using NaturShield Pest Guard on my grapes completely eliminated the aphid problem without harming the fruit quality. The buyers actually paid me a premium because the grapes were residue-free. Excellent product!',
  },
  {
    name: 'Priya Kale',
    location: 'Rajgurunagar, Pune',
    crop: 'Flowers & Herbs',
    image:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'The BioVita Growth Tonic worked wonders on my chrysanthemum crop. Flowering was earlier, blooms were larger, and shelf life improved significantly. Very happy with the results and the customer service.',
  },
  {
    name: 'Suresh Bhosale',
    location: 'Ambegaon, Pune',
    crop: 'Rice & Vegetables',
    image:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'SoilRevive Microbiome transformed my paddy field. The soil was nearly dead after years of chemical use, but within one season the texture improved, earthworms came back, and my rice yield was up 28%. Truly miraculous.',
  },
  {
    name: 'Meena Patil',
    location: 'Khed, Pune',
    crop: 'Sugarcane',
    image:
      'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'I attended Ganesh Organic\'s free workshop on sustainable sugarcane farming and it changed everything. The guidance was practical, the products affordable, and the results speak for themselves. Highly recommend!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-forest-950 to-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-forest-200 rounded-full px-4 py-1.5 text-sm font-semibold mb-4 border border-white/10">
            <Quote className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Farmers Who{' '}
            <span className="text-earth-300">Trust Us</span>
          </h2>
          <p className="text-lg text-forest-200 max-w-xl mx-auto">
            Real stories from real farmers across Maharashtra who've transformed their farms with
            Ganesh Organic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-earth-400 text-earth-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-forest-400 mb-3" />

              <p className="text-forest-100 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-forest-400/30"
                />
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-forest-300">{t.location}</div>
                  <div className="text-xs text-earth-400 mt-0.5">{t.crop}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
