import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Contact Us
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Our Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    House 12, Road 5<br />
                    Dhanmondi, Dhaka 1209<br />
                    Bangladesh
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Customer Support:<br /> 
                    +880 17 1234 5678
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Support:<br /> 
                    support@yourshopbd.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Live Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Available 7 Days a Week<br />
                    10:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Business Hours
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex justify-between">
                  <span>Saturday - Thursday:</span>
                  <span>10:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday:</span>
                  <span>4:00 PM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Government Holidays:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send us a message
            </h2>
            
            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 dark:bg-green-800 rounded-full p-3">
                    <Send className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Message sent successfully!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Thanks for contacting us. Our support team will reply within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2 bg-primary text-white rounded-md hover:bg-magenta-600 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="return">Return/Refund</option>
                    <option value="product">Product Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-magenta-600 transition-colors disabled:bg-gray-400 flex items-center justify-center"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="mt-10 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Our location
        </h2>
        <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902240506889!2d90.3811!3d23.7509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bfc2d3b0c5%3A0xf12a6e0d5f3b91f2!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1709569999999"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shop Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
