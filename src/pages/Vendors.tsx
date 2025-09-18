import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Camera, Utensils, Music, MapPin, Palette, Car, Flower } from 'lucide-react';

const Vendors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCulture, setActiveCulture] = useState('All');

  const categories = [
    { name: 'All', icon: null },
    { name: 'Photography', icon: Camera },
    { name: 'Catering', icon: Utensils },
    { name: 'Florists', icon: Flower },
    { name: 'Entertainment', icon: Music },
    { name: 'Venues', icon: MapPin },
    { name: 'Beauty', icon: Palette },
    { name: 'Transportation', icon: Car }
  ];

  const cultures = ['All', 'Indian', 'African', 'Chinese', 'Jewish', 'Muslim', 'Latino', 'Korean'];

  const vendors = [
    {
      name: "Eternal Moments Photography",
      category: "Photography",
      description: "Award-winning wedding photography capturing authentic emotions and cultural traditions",
      specialties: ["Indian", "African", "Chinese"],
      contact: "info@eternalmoments.com",
      phone: "(555) 123-4567",
      rating: 4.9,
      reviews: 127
    },
    {
      name: "Spice & Stories Catering",
      category: "Catering", 
      description: "Authentic cuisine from around the world, specializing in cultural wedding menus",
      specialties: ["Indian", "Muslim", "Latino"],
      contact: "hello@spiceandstories.com",
      phone: "(555) 234-5678",
      rating: 4.8,
      reviews: 89
    },
    {
      name: "Harmony Wedding Musicians",
      category: "Entertainment",
      description: "Live music and DJs experienced in traditional and modern wedding entertainment",
      specialties: ["Jewish", "African", "Korean"],
      contact: "bookings@harmonywedding.com", 
      phone: "(555) 345-6789",
      rating: 4.9,
      reviews: 156
    },
    {
      name: "Garden Dreams Florals",
      category: "Florists",
      description: "Custom floral designs incorporating cultural flowers and meaningful botanicals",
      specialties: ["Chinese", "Indian", "Latino"],
      contact: "orders@gardendreams.com",
      phone: "(555) 456-7890", 
      rating: 4.7,
      reviews: 203
    },
    {
      name: "Glow Beauty Studio",
      category: "Beauty",
      description: "Bridal makeup and hair specialists familiar with diverse beauty traditions",
      specialties: ["African", "Indian", "Muslim"],
      contact: "bookings@glowbeauty.com",
      phone: "(555) 567-8901",
      rating: 4.8,
      reviews: 98
    },
    {
      name: "Elite Wedding Venues",
      category: "Venues", 
      description: "Stunning venues perfect for ceremonies of all sizes and cultural requirements",
      specialties: ["Jewish", "Chinese", "Korean"],
      contact: "events@elitevenues.com",
      phone: "(555) 678-9012",
      rating: 4.9,
      reviews: 145
    }
  ];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || vendor.category === activeCategory;
    const matchesCulture = activeCulture === 'All' || vendor.specialties.includes(activeCulture);
    
    return matchesSearch && matchesCategory && matchesCulture;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Preferred Vendors
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Our carefully vetted network of professional vendors who understand and celebrate cultural diversity in weddings.
          </p>
          
          <div className="bg-card rounded-lg p-6 max-w-4xl mx-auto shadow-card">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              Why Choose Our Preferred Vendors?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">✨ Pre-Vetted Quality</h4>
                <p className="text-muted-foreground">All vendors are thoroughly screened for quality and professionalism</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">🌍 Cultural Expertise</h4>
                <p className="text-muted-foreground">Experienced in diverse cultural and religious wedding traditions</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">🤝 Seamless Coordination</h4>
                <p className="text-muted-foreground">Established relationships ensure smooth collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search vendors by name or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Filter by Category:</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.name}
                    variant={activeCategory === category.name ? "default" : "outline"}
                    className={`transition-smooth ${
                      activeCategory === category.name 
                        ? 'btn-wedding-primary' 
                        : 'btn-wedding-outline'
                    }`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    {IconComponent && <IconComponent className="h-4 w-4 mr-2" />}
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Cultural Specialty Filters */}
          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-3">Filter by Cultural Specialty:</h3>
            <div className="flex flex-wrap gap-3">
              {cultures.map((culture) => (
                <Button
                  key={culture}
                  variant={activeCulture === culture ? "default" : "outline"}
                  size="sm"
                  className={`transition-smooth ${
                    activeCulture === culture 
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground'
                  }`}
                  onClick={() => setActiveCulture(culture)}
                >
                  {culture}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vendors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredVendors.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                No vendors found matching your criteria.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                  setActiveCulture('All');
                }}
                className="btn-wedding-outline"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVendors.map((vendor, index) => (
                <Card key={index} className="shadow-card hover-lift bg-gradient-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="font-playfair text-xl text-foreground mb-2">
                          {vendor.name}
                        </CardTitle>
                        <Badge variant="secondary" className="mb-2">
                          {vendor.category}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-400">★</span>
                          <span className="font-semibold">{vendor.rating}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          ({vendor.reviews} reviews)
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {vendor.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Cultural Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vendor.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4 text-sm">
                      <p className="text-muted-foreground">
                        📧 {vendor.contact}
                      </p>
                      <p className="text-muted-foreground">
                        📞 {vendor.phone}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Button className="btn-wedding-primary w-full">
                        View Portfolio
                      </Button>
                      <Button variant="outline" className="btn-wedding-outline w-full">
                        Contact Vendor
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We're constantly expanding our vendor network. Let us help you find the perfect professionals for your special day.
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary" className="btn-wedding-secondary">
              Request Vendor Recommendation
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4" style={{borderColor: '#000000', color: '#000000', backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
              Become a Vendor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vendors;