
import { useState } from 'react';
import { CupSoda, CakeSlice } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuCategories = [
  { id: 'coffee', label: 'Coffee', icon: CupSoda },
  { id: 'food', label: 'Food', icon: CakeSlice }
];

const menuItems = {
  coffee: [
    {
      name: "Espresso",
      description: "Rich and robust single shot of espresso",
      price: "$2.99",
      popular: true
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk foam",
      price: "$4.50",
      popular: false
    },
    {
      name: "Pour Over",
      description: "Hand-poured coffee highlighting origin flavors",
      price: "$5.25",
      popular: true
    },
    {
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk",
      price: "$4.99",
      popular: false
    },
    {
      name: "Cold Brew",
      description: "Smooth, slow-steeped cold coffee",
      price: "$4.75",
      popular: true
    }
  ],
  food: [
    {
      name: "Avocado Toast",
      description: "Sourdough toast with smashed avocado and seeds",
      price: "$7.99",
      popular: true
    },
    {
      name: "Chocolate Croissant",
      description: "Flaky pastry with rich chocolate filling",
      price: "$3.50",
      popular: false
    },
    {
      name: "Breakfast Sandwich",
      description: "Egg, cheese and bacon on an artisan roll",
      price: "$6.25",
      popular: true
    },
    {
      name: "Blueberry Muffin",
      description: "Moist muffin loaded with fresh blueberries",
      price: "$3.75",
      popular: false
    }
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  return (
    <section id="menu" className="section bg-coffee-cream/20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="uppercase tracking-wider text-coffee-medium font-medium mb-3">
            Menu
          </h3>
          <h2 className="heading text-3xl md:text-4xl font-bold mb-6">
            Discover Our Offerings
          </h2>
          <p className="text-gray-700">
            We pride ourselves on quality ingredients and expert preparation. Our menu changes seasonally to incorporate the freshest flavors.
          </p>
        </div>
        
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-lg border border-coffee-light p-1">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2 rounded-md transition-colors",
                  activeCategory === category.id 
                    ? "bg-coffee-light text-white" 
                    : "text-coffee-medium hover:bg-coffee-light/10"
                )}
              >
                <category.icon size={18} />
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-xl font-medium text-coffee-dark">
                    {item.name}
                  </h3>
                  {item.popular && (
                    <span className="bg-coffee-accent/20 text-coffee-dark text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mt-1">{item.description}</p>
              </div>
              <div className="font-serif font-bold text-coffee-medium">
                {item.price}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="coffee-btn-outline text-center inline-block">
            Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
