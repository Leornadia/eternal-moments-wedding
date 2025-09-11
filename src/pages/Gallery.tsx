import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { getImagePath } from '@/lib/image-utils';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Indian', 'African', 'Chinese', 'Western', 'Jewish', 'Muslim', 'Latino'];
  
  const photos = [
    { id: 1, category: 'Indian', alt: 'Indian wedding ceremony', couple: 'Priya & Raj', date: '2024', image: 'Priya and Raj.jpg' },
    { id: 2, category: 'African', alt: 'African celebration', couple: 'Zara & Marcus', date: '2024', image: 'Zara Marcas.jpg' },
    { id: 3, category: 'Western', alt: 'Classic wedding', couple: 'Emma & James', date: '2023', image: 'Emma  james.jpg' },
    { id: 4, category: 'Chinese', alt: 'Chinese tea ceremony', couple: 'Li & Chen', date: '2024', image: 'Li and Chen.jpg' },
    { id: 5, category: 'Jewish', alt: 'Jewish ceremony', couple: 'Sarah & David', date: '2023', image: 'sarah and David.jpg' },
    { id: 6, category: 'Muslim', alt: 'Muslim wedding', couple: 'Aisha & Omar', date: '2024', image: 'Aisha and Omar.jpg' },
    { id: 7, category: 'Latino', alt: 'Latino celebration', couple: 'Sofia & Diego', date: '2024', image: 'Sofia and Diego.jpg' },
    { id: 8, category: 'Indian', alt: 'Mehndi ceremony', couple: 'Kavya & Arjun', date: '2023', image: 'Kavya and Arjun.jpg' },
  ];

  const filteredPhotos = activeFilter === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Wedding Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating love across all cultures and traditions. Each wedding tells a unique story of romance, heritage, and joy.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`transition-smooth ${
                  activeFilter === filter 
                    ? 'btn-wedding-primary' 
                    : 'btn-wedding-outline'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-lg shadow-card hover-lift aspect-square bg-sage/20"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-smooth">
                  <h3 className="font-playfair text-lg font-semibold">{photo.couple}</h3>
                  <p className="text-sm opacity-90">{photo.date}</p>
                  <span className="inline-block bg-primary/80 text-xs px-2 py-1 rounded-full mt-1">
                    {photo.category}
                  </span>
                </div>
                <img 
                  src={getImagePath(`images/${photo.image}`)}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {filteredPhotos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No photos found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Weddings */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Featured Weddings
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the beauty and diversity of our couples' special days
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-card hover-lift mb-4">
                  <img 
                    src={getImagePath(`images/Cultural Celebration ${index}.jpg`)}
                    alt={`Cultural Celebration ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                  Cultural Celebration {index}
                </h3>
                <p className="text-muted-foreground">Beautiful tradition meets modern elegance</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Button className="btn-wedding-outline">
            Load More Photos
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;