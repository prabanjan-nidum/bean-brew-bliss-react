
import { MapPin, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="uppercase tracking-wider text-coffee-medium font-medium mb-3">
              Visit Us
            </h3>
            <h2 className="heading text-3xl md:text-4xl font-bold mb-6">
              Find Our Coffee Shop
            </h2>
            <p className="text-gray-700 mb-8">
              Located in the heart of the city, our coffee shop offers the perfect atmosphere for catching up with friends, working remotely, or simply enjoying a quiet moment with a perfect cup.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-coffee-cream/30 w-12 h-12 rounded-full flex items-center justify-center text-coffee-dark flex-shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Address</h3>
                  <p className="text-gray-600">123 Coffee Lane, Brewville, BW 54321</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-coffee-cream/30 w-12 h-12 rounded-full flex items-center justify-center text-coffee-dark flex-shrink-0">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-coffee-cream/30 w-12 h-12 rounded-full flex items-center justify-center text-coffee-dark flex-shrink-0">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <p className="text-gray-600">hello@beanbliss.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium text-lg mb-3">Hours</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>Monday - Friday</div>
                <div>6:00 AM - 8:00 PM</div>
                <div>Saturday</div>
                <div>7:00 AM - 8:00 PM</div>
                <div>Sunday</div>
                <div>8:00 AM - 6:00 PM</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-200 rounded-lg min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-3 text-coffee-dark">Map Coming Soon</h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                We're working on integrating an interactive map. For now, please use our address to find us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
