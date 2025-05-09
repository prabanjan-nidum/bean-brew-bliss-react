
import { Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?q=80&w=1770&auto=format&fit=crop" 
              alt="Barista making coffee" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-3">
              <Coffee size={20} className="text-coffee-medium" />
              <h3 className="uppercase tracking-wider text-coffee-medium font-medium">
                Our Story
              </h3>
            </div>
            <h2 className="heading text-3xl md:text-4xl font-bold mb-6">
              Crafting Moments, <br />One Cup at a Time
            </h2>
            <p className="text-gray-700 mb-6">
              Founded in 2015, Bean Bliss began with a simple mission: to serve exceptional coffee in a space that feels like home. Our founder, Emma, traveled across the globe studying coffee cultivation and brewing techniques before bringing her passion back to our local community.
            </p>
            <p className="text-gray-700 mb-8">
              Today, we source ethically grown beans from small-scale farms worldwide and roast them in-house to ensure the freshest, most flavorful cup every time. Our baristas are artisans, trained in the science and craft of coffee preparation.
            </p>
            <a href="#menu" className="coffee-btn">Discover Our Coffee</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
