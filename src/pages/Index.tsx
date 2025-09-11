import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Award, Calendar, ArrowRight, Star, ChevronLeft, ChevronRight, Camera, Palette, Music, Instagram } from 'lucide-react';
import heroImage from '@/assets/hero-wedding.jpg';
import couplesCollage from '@/assets/couples-collage.jpg';
import { getImagePath } from '@/lib/image-utils';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const statistics = [
    { number: "500+", label: "Weddings Planned", icon: Heart },
    { number: "15+", label: "Cultural Traditions", icon: Users },
    { number: "100%", label: "Satisfaction Rate", icon: Award }
  ];

  const services = [
    {
      title: "Full Wedding Planning",
      description: "Complete end-to-end planning from engagement to your special day with unlimited support and cultural expertise.",
      image: getImagePath("images/wedding planner 1.jpg"),
      link: "/services"
    },
    {
      title: "Cultural Ceremonies", 
      description: "Honoring traditions from around the world with authentic ceremonies that celebrate your heritage beautifully.",
      image: getImagePath("images/Cultural Ceremonies.jpg"),
      link: "/services"
    },
    {
      title: "Venue Transformation",
      description: "Transforming any space into your dream wedding venue with elegant design and cultural authenticity.",
      image: getImagePath("images/Venue Transformation.jpg"),
      link: "/portfolio"
    }
  ];

  const testimonials = [
    {
      name: "Priya & James Chen",
      text: "Eternal Moments perfectly blended our Indian and Scottish traditions. Every detail was thoughtfully planned and beautifully executed. Our families were amazed by how authentically both cultures were represented.",
      image: "🥰",
      rating: 5
    },
    {
      name: "Aisha & Marcus Johnson", 
      text: "From our Moroccan-inspired ceremony to the contemporary reception, every moment was magical. The team understood our vision and brought it to life beyond our wildest dreams.",
      image: "😍",
      rating: 5
    },
    {
      name: "Sarah & David Kim",
      text: "Planning a Jewish-Korean wedding seemed impossible until we found Eternal Moments. They honored both traditions beautifully and created a celebration our families will never forget.",
      image: "🤩",
      rating: 5
    },
    {
      name: "Sofia & Diego Martinez",
      text: "Our Latino celebration was everything we dreamed of and more. The attention to cultural details and family traditions made our wedding truly special and authentic.",
      image: "🥳",
      rating: 5
    }
  ];

  const instagramPhotos = [
    { id: 1, alt: "Beautiful wedding ceremony" },
    { id: 2, alt: "Elegant reception setup" },
    { id: 3, alt: "Cultural wedding traditions" },
    { id: 4, alt: "Bridal portrait session" },
    { id: 5, alt: "Wedding decoration details" },
    { id: 6, alt: "Happy couple celebration" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: 'translateZ(0)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in">
            Creating Your Perfect Day
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Luxury wedding planning celebrating love in all cultures
          </p>
          <div className="space-x-6">
            <Button size="lg" className="btn-wedding-primary text-lg px-8 py-4 hover-glow">
              Start Planning
            </Button>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="btn-wedding-outline text-white border-white hover:bg-white hover:text-foreground text-lg px-8 py-4">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Celebrating Love Across All Cultures
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  At Eternal Moments, we believe every love story is unique and deserves to be celebrated with honor, authenticity, and elegance. Our expertise spans across cultural traditions, bringing together the best of your heritage with modern sophistication.
                </p>
              </div>
              
              {/* Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {statistics.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center p-6 bg-card rounded-lg shadow-card">
                      <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="font-playfair text-3xl font-bold text-foreground">{stat.number}</div>
                      <div className="text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image Collage */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant hover-lift">
                <img 
                  src={couplesCollage} 
                  alt="Diverse couples celebrating their weddings"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-glow">
                <div className="text-center">
                  <div className="font-playfair text-2xl font-bold">15+</div>
                  <div className="text-sm">Cultural Traditions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Wedding Planning Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intimate ceremonies to grand celebrations, we create unforgettable experiences that honor your love story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover-lift bg-gradient-card group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 group-hover:scale-110 transition-bounce">
                    {service.image.startsWith('/images/') ? (
                      <img 
                        src={service.image} 
                        alt={`${service.title} service`} 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-6xl">{service.image}</div>
                    )}
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <Button className="btn-wedding-outline group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              What Our Couples Say
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Real stories from real couples who trusted us with their special day
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
              <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-3 border-yellow-400 shadow-lg">
                <img 
                  src={getImagePath("images/What Our Couples Say.jpg")} 
                  alt={`${currentTestimonialData.name} - Wedding Photo`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonialData.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl italic mb-8 leading-relaxed">
                "{currentTestimonialData.text}"
              </blockquote>
              
              <div className="font-playfair text-xl font-semibold">
                {currentTestimonialData.name}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-smooth"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-smooth"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Follow Our Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get inspired by recent weddings and behind-the-scenes moments
            </p>
            <Badge variant="outline" className="px-4 py-2 text-lg">
              <Instagram className="h-5 w-5 mr-2" />
              @eternalmoments
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPhotos.map((photo, index) => (
              <div 
                key={photo.id}
                className="aspect-square rounded-lg overflow-hidden shadow-card hover-lift group cursor-pointer relative"
              >
                <img 
                  src={getImagePath(`images/follow our journey ${index + 1}.jpg`)}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-wedding-outline">
              <Instagram className="mr-2 h-5 w-5" />
              Follow @eternalmoments
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Planning Your Dream Wedding?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create a celebration that perfectly reflects your love story and cultural heritage.
          </p>
          <div className="space-x-6">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="btn-wedding-secondary text-lg px-8 py-4">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
