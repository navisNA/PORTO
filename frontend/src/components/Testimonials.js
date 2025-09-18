import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockData } from '../data/mockData';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === mockData.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? mockData.testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  if (!mockData.testimonials || mockData.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section bg-gray-900/50">
      <div className="container">
        <h2 className="heading-1 text-center mb-16">What People Say</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative">
            <div className="card text-center p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <Quote className="text-lime-400" size={48} />
              </div>
              
              {/* Testimonial Content */}
              <blockquote className="body-large mb-8 leading-relaxed italic text-gray-300">
                "{mockData.testimonials[currentTestimonial].content}"
              </blockquote>
              
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(mockData.testimonials[currentTestimonial].rating)].map((_, index) => (
                  <Star key={index} className="text-lime-400 fill-current" size={20} />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={mockData.testimonials[currentTestimonial].image}
                  alt={mockData.testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-lime-400/50"
                />
                <div className="text-left">
                  <h4 className="heading-3 mb-1">
                    {mockData.testimonials[currentTestimonial].name}
                  </h4>
                  <p className="body-small text-gray-400">
                    {mockData.testimonials[currentTestimonial].position}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            {mockData.testimonials.length > 1 && (
              <>
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="text-lime-400" size={24} />
                </button>
                
                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="text-lime-400" size={24} />
                </button>
              </>
            )}
          </div>
          
          {/* Testimonial Indicators */}
          {mockData.testimonials.length > 1 && (
            <div className="flex justify-center mt-8 gap-3">
              {mockData.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === index 
                      ? 'bg-lime-400' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          )}
          
          {/* All Testimonials Preview */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {mockData.testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`card p-6 cursor-pointer transition-all duration-300 ${
                  currentTestimonial === index 
                    ? 'border-lime-400/50 bg-lime-400/5' 
                    : 'hover:bg-gray-800/50'
                }`}
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="body-medium font-semibold">{testimonial.name}</h5>
                    <p className="body-small text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
                <p className="body-small text-gray-300 line-clamp-3">
                  "{testimonial.content}"
                </p>
                <div className="flex mt-3">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="text-lime-400 fill-current" size={14} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;