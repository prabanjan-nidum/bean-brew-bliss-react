
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-coffee-dark text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <h2 className="font-serif text-2xl font-bold mb-4">Bean Bliss</h2>
            <p className="text-white/80 mb-6">
              Crafting exceptional coffee experiences since 2015. Join us for a cup!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#menu" className="text-white/70 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#location" className="text-white/70 hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Hours</h3>
            <ul className="space-y-2 text-white/70">
              <li>Monday - Friday: 6:00 AM - 8:00 PM</li>
              <li>Saturday: 7:00 AM - 8:00 PM</li>
              <li>Sunday: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>123 Coffee Lane, Brewville</li>
              <li>(555) 123-4567</li>
              <li>hello@beanbliss.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Bean Bliss Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
