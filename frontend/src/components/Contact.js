import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Youtube, Instagram, Globe } from 'lucide-react';
import { mockData } from '../data/mockData';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission - will be replaced with actual backend integration
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'youtube':
        return <Youtube size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      case 'behance':
        return <Globe size={20} />;
      default:
        return <Globe size={20} />;
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-6">{mockData.contact.title}</h2>
          <p className="body-large text-gray-400 max-w-2xl mx-auto">
            {mockData.contact.subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="heading-2 mb-8">Get In Touch</h3>
            <p className="body-large text-gray-300 mb-8">
              Ready to collaborate on your next project? Whether you need engineering expertise or multimedia production services, I'd love to hear from you.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lime-400/20 rounded-full flex items-center justify-center">
                  <Mail className="text-lime-400" size={20} />
                </div>
                <div>
                  <h4 className="body-medium font-semibold mb-1">Email</h4>
                  <a 
                    href={`mailto:${mockData.contact.email}`}
                    className="body-medium text-gray-400 hover:text-lime-400 transition-colors"
                  >
                    {mockData.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lime-400/20 rounded-full flex items-center justify-center">
                  <Phone className="text-lime-400" size={20} />
                </div>
                <div>
                  <h4 className="body-medium font-semibold mb-1">Phone</h4>
                  <a 
                    href={`tel:${mockData.contact.phone}`}
                    className="body-medium text-gray-400 hover:text-lime-400 transition-colors"
                  >
                    {mockData.contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-lime-400/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-lime-400" size={20} />
                </div>
                <div>
                  <h4 className="body-medium font-semibold mb-1">Location</h4>
                  <p className="body-medium text-gray-400">{mockData.contact.location}</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="body-medium font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {mockData.contact.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 hover:bg-lime-400/20 rounded-full flex items-center justify-center transition-colors group"
                  >
                    <span className="text-gray-400 group-hover:text-lime-400 transition-colors">
                      {getSocialIcon(social.platform)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="card">
              <h3 className="heading-2 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block body-medium font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-lime-400 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block body-medium font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-lime-400 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block body-medium font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-lime-400 focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block body-medium font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-lime-400 focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center gap-3 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;