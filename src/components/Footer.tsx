import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#blog' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const products = [
  'GreenGold Compost',
  'BioVita Growth Tonic',
  'NaturShield Pest Guard',
  'SoilRevive Microbiome',
  'VermiGold Premium',
  'RootMax Biostimulant',
];

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Twitter, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">Ganesh Organic</div>
                <div className="text-xs text-forest-400">Pure. Natural. Healthy.</div>
              </div>
            </div>
            <p className="text-sm text-forest-300 leading-relaxed mb-5">
              Empowering Maharashtra's farmers with organic farming solutions since 2012. Rooted in
              nature, growing with purpose.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 bg-forest-800 hover:bg-forest-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-forest-300" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-forest-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-forest-500 rounded-full group-hover:bg-earth-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Our Products
            </h4>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    className="text-sm text-forest-300 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-forest-500 rounded-full group-hover:bg-earth-400 transition-colors" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-forest-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-forest-300">
                  Golegaon, Junnar,<br />Pune District, MH 410502
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-forest-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-forest-300">+91 98765 43210</div>
                  <div className="text-sm text-forest-300">+91 87654 32109</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-forest-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-forest-300">info@ganeshorganic.in</div>
                  <div className="text-sm text-forest-300">support@ganeshorganic.in</div>
                </div>
              </div>
            </div>

            <div className="mt-5 p-4 bg-forest-900 rounded-xl border border-forest-800">
              <div className="text-sm font-semibold text-white mb-1">Newsletter</div>
              <p className="text-xs text-forest-400 mb-3">Get farming tips & updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-forest-800 text-white text-xs px-3 py-2 rounded-lg border border-forest-700 focus:border-forest-500 outline-none placeholder-forest-500"
                />
                <button className="px-3 py-2 bg-forest-600 hover:bg-forest-500 rounded-lg transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-forest-500">
            © 2024 Ganesh Organic. All rights reserved. | Golegaon, Junnar, Maharashtra
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-forest-500 hover:text-forest-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-forest-500 hover:text-forest-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
