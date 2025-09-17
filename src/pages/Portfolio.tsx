import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Users, MapPin, Palette } from 'lucide-react';
import { getImagePath } from '@/lib/image-utils';

const Portfolio = () => {
  const designStyles = [
    {
      title: "Classic Elegance",
      description: "Timeless sophistication with luxurious details and traditional elements",
      icon: "👑"
    },
    {
      title: "Modern Minimalist", 
      description: "Clean lines, contemporary aesthetics, and sophisticated simplicity",
      icon: "✨"
    },
    {
      title: "Rustic Charm",
      description: "Natural elements, warm textures, and countryside romance",
      icon: "🌿"
    },
    {
      title: "Cultural Fusion",
      description: "Blending traditions from different cultures in harmonious celebration",
      icon: "🌺"
    }
  ];

  const featuredProjects = [
    {
      title: "Priya & James - Cultural Fusion Extravaganza",
      challenge: "Blending Indian and Scottish traditions seamlessly",
      solution: "Created dual ceremony spaces with cultural elements from both backgrounds",
      result: "A breathtaking celebration honoring both heritages",
      details: ["300 guests", "2-day celebration", "Highland & Bollywood themes"],
      images: 25,
      image: "Priya & James.jpg"
    },
    {
      title: "Sarah & David - Elegant Garden Soirée",
      challenge: "Transforming industrial venue into romantic garden",
      solution: "Extensive florals, lighting design, and natural installations", 
      result: "Magical garden atmosphere in urban setting",
      details: ["150 guests", "Rooftop venue", "Sustainable florals"],
      images: 40,
      image: "Sarah & David.jpg"
    },
    {
      title: "Aisha & Marcus - Modern Moroccan Magic",
      challenge: "Incorporating traditional Moroccan elements in contemporary space",
      solution: "Rich textiles, lanterns, and geometric patterns with modern florals",
      result: "Sophisticated blend of tradition and contemporary elegance",
      details: ["200 guests", "Museum venue", "Custom installations"],
      images: 35,
      image: "Aisha & Marcus - Modern Moroccan Magic.jpg"
    }
  ];

  const processSteps = [
    { step: 1, title: "Initial Consultation", description: "Understanding your vision and style preferences" },
    { step: 2, title: "Concept Development", description: "Creating mood boards and design concepts" },
    { step: 3, title: "Vendor Collaboration", description: "Working with trusted partners to execute the vision" },
    { step: 4, title: "Venue Transformation", description: "Bringing the design to life on your special day" },
    { step: 5, title: "Final Execution", description: "Seamless coordination for a flawless celebration" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Transforming Venues Into Dreams
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our design expertise creates magical spaces that reflect your unique love story and cultural heritage.
          </p>
        </div>
      </section>

      {/* Before/After Transformations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Venue Transformations
            </h2>
            <p className="text-xl text-muted-foreground">
              See how we transform ordinary spaces into extraordinary experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} className="shadow-card hover-lift overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Before & After
                    </span>
                  </div>
                  <img 
                    src={getImagePath(`images/Elegant Ballroom Transformation ${index}.jpg`)}
                    alt={`Elegant Ballroom Transformation ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    Elegant Ballroom Transformation
                  </h3>
                  <p className="text-muted-foreground">
                    From blank canvas to romantic paradise with custom lighting and florals
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Styles */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Design Styles We Master
            </h2>
            <p className="text-xl text-muted-foreground">
              Every couple has a unique vision - we bring it to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designStyles.map((style, index) => (
              <Card key={index} className="shadow-card hover-lift bg-gradient-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{style.icon}</span>
                    <div>
                      <CardTitle className="font-playfair text-2xl text-foreground">
                        {style.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2">{style.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="btn-wedding-outline">
                    View Gallery <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Featured Wedding Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Detailed case studies showcasing our planning and design expertise
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] rounded-lg shadow-card overflow-hidden">
                    <img 
                      src={getImagePath(`images/${project.image}`)}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                      <p className="text-muted-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Result:</h4>
                      <p className="text-muted-foreground">{project.result}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.details.map((detail, idx) => (
                      <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {detail}
                      </span>
                    ))}
                  </div>
                  <Button className="btn-wedding-primary">
                    View Full Gallery ({project.images} photos)
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Our Design Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From concept to reality - how we bring your vision to life
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">
            Ready to Transform Your Vision Into Reality?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create a wedding design that perfectly captures your love story and style.
          </p>
          <Button size="lg" variant="secondary" className="btn-wedding-secondary">
            Start Your Design Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;