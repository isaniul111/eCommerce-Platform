import { Users, Award, ShieldCheck, Truck } from 'lucide-react';

export default function About() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        About ModernShop
      </h1>
      
      {/* Hero Section */}
      <div className="relative mb-12">
        <img 
          src="https://res.cloudinary.com/dyghbtkxl/image/upload/v1759247006/samples/cup-on-a-table.jpg" 
          alt="TrendMart Team" 
          className="w-full h-64 md:h-96 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Story</h2>
            <p className="text-lg md:text-xl max-w-2xl">
              Bringing quality products and exceptional shopping experiences since 2024.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Mission */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          At ModernShop, our mission is to provide customers with high-quality products that enhance their everyday lives. We believe in creating a shopping experience that is seamless, enjoyable, and trustworthy.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          We're committed to sourcing products that meet our strict quality standards, offering exceptional customer service, and continuously improving our platform to meet the evolving needs of our customers.
        </p>
      </div>
      
      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <Users className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Customer First
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            We prioritize the needs of our customers and feedback in everything we do, ensuring their satisfaction is our top priority.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <Award className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Quality Excellence
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            We never compromise on quality, carefully selecting products that meet our high standards for durability and performance.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <ShieldCheck className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Trust & Transparency
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            We build trust through honest communication, transparent policies, and reliable service that customers can depend on.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <Truck className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Reliable Service
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            We deliver on our promises with fast shipping, responsive customer support, and hassle-free returns.
          </p>
        </div>
      </div>
      
      {/* Our Team */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
    Our Team
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* 1st Member */}
    <div className="flex flex-col items-center">
      <img 
        src="https://res.cloudinary.com/dyghbtkxl/image/upload/v1768989483/Ahad_rha5m9.png" 
        alt="Abdullah Al Ahad" 
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Abdullah Al Ahad
      </h3>
      <p className="text-primary font-medium">Founder</p>
      <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
        Abdullah is the visionary founder of our platform, focused on building a modern, user-friendly, and trustworthy online shopping experience for customers across Bangladesh.
      </p>
    </div>

    {/* 2nd Member */}
    <div className="flex flex-col items-center">
      <img 
        src="https://res.cloudinary.com/dyghbtkxl/image/upload/v1768989484/saniul_oteg2b.jpg" 
        alt="Saniul" 
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Saniul
      </h3>
      <p className="text-primary font-medium">Manager</p>
      <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
        Saniul manages the platform development and daily operations, ensuring smooth performance, secure systems, and a reliable shopping experience for all users.
      </p>
    </div>

  </div>
</div>

      
      {/* Our Journey */}
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
    Our Journey
  </h2>

  <div className="space-y-8">

    <div className="flex">
      <div className="flex-shrink-0 w-24 text-right pr-6">
        <span className="text-primary font-semibold">2024</span>
      </div>
      <div className="border-l-2 border-primary pl-6 pb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          The Beginning
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Our journey started in Bangladesh with a small but passionate team and a big dream — to build a reliable and modern online shopping platform for local customers.
        </p>
      </div>
    </div>

    <div className="flex">
      <div className="flex-shrink-0 w-24 text-right pr-6">
        <span className="text-primary font-semibold">2025</span>
      </div>
      <div className="border-l-2 border-primary pl-6 pb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Platform Launch
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          We officially launched our ecommerce platform, offering quality products, secure checkout, and fast delivery across major cities in Bangladesh.
        </p>
      </div>
    </div>

    <div className="flex">
      <div className="flex-shrink-0 w-24 text-right pr-6">
        <span className="text-primary font-semibold">2025</span>
      </div>
      <div className="border-l-2 border-primary pl-6 pb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Growth & Trust
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          With growing customer trust, we expanded our product categories and improved logistics, customer support, and payment integrations.
        </p>
      </div>
    </div>

    <div className="flex">
      <div className="flex-shrink-0 w-24 text-right pr-6">
        <span className="text-primary font-semibold">2026</span>
      </div>
      <div className="border-l-2 border-primary pl-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Today & Beyond
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Today, we continue to innovate with a strong focus on user experience, mobile-first design, and building a trusted ecommerce brand in Bangladesh.
        </p>
      </div>
    </div>

  </div>
</div>

    </section>
  );
}
