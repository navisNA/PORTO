import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Youtube, Instagram, Globe, MessageCircle, Clock, CheckCircle } from 'lucide-react';
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

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
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

  const contactMethods = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email",
      subtitle: "Drop me a line",
      value: mockData.contact.email,
      action: `mailto:${mockData.contact.email}`,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      title: "Phone",
      subtitle: "Call me directly",
      value: mockData.contact.phone,
      action: `tel:${mockData.contact.phone}`,
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: <MapPin className="text-orange-400" size={24} />,
      title: "Location",
      subtitle: "Based in",
      value: mockData.contact.location,
      action: null,
      gradient: "from-orange-500 to-yellow-400"
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{mockData.contact.title}</h2>
          <p className="body-large text-gray-400 max-w-2xl mx-auto">
            {mockData.contact.subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-2 mb-6 text-white flex items-center gap-3">
                <MessageCircle className="text-cyan-400" size={28} />
                Let's Connect
              </h3>
              <p className="body-large text-gray-300 mb-8 leading-relaxed">
                Ready to collaborate on your next project? Whether you need engineering expertise or multimedia production services, I'd love to hear from you.
              </p>
            </div>
            
            {/* Enhanced Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="body-medium font-semibold mb-1 text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="body-small text-gray-400 mb-2">{method.subtitle}</p>
                      {method.action ? (
                        <a 
                          href={method.action}
                          className="body-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="body-medium text-gray-300 font-medium">{method.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enhanced Social Links */}
            <div className="pt-8 border-t border-gray-700">
              <h4 className="body-medium font-semibold mb-6 text-white flex items-center gap-2">
                <Globe className="text-cyan-400" size={20} />
                Follow My Work
              </h4>
              <div className="flex gap-4">
                {mockData.contact.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-blue-500 hover:to-cyan-400 rounded-2xl flex items-center justify-center transition-all duration-300 border border-gray-600 hover:border-transparent shadow-lg hover:shadow-2xl hover:transform hover:scale-110"
                  >
                    <span className="text-gray-400 group-hover:text-white transition-colors">
                      {getSocialIcon(social.platform)}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-700/30">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-green-400" size={20} />
                <span className="body-medium font-semibold text-green-400">Quick Response</span>
              </div>
              <p className="body-small text-gray-300">
                I typically respond to messages within 24 hours during business days.
              </p>
            </div>
          </div>
          
          {/* Enhanced Contact Form */}
          <div>
            <div className="card bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
              <h3 className="heading-2 mb-6 text-white flex items-center gap-3">
                <Send className="text-cyan-400" size={24} />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block body-medium font-semibold mb-2 text-gray-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block body-medium font-semibold mb-2 text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block body-medium font-semibold mb-2 text-gray-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block body-medium font-semibold mb-2 text-gray-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-vertical text-white placeholder-gray-400"
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
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success Message */}
                <div className="flex items-center gap-2 text-green-400 opacity-0 transition-opacity duration-300">
                  <CheckCircle size={16} />
                  <span className="body-small">Message sent successfully!</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;