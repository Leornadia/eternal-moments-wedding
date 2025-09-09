import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Search, TrendingUp } from 'lucide-react';

const Blog = () => {
  const categories = [
    'Planning Tips',
    'Real Weddings', 
    'Cultural Traditions',
    'Trends & Inspiration',
    'Vendor Spotlights'
  ];

  const featuredPost = {
    title: "Creating a Multi-Cultural Wedding: Blending Two Traditions Beautifully",
    excerpt: "When two cultures unite in marriage, the celebration becomes a beautiful tapestry of traditions, colors, and customs. Learn how to honor both backgrounds while creating a cohesive wedding experience.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    category: "Cultural Traditions",
    readTime: "8 min read",
    image: "/images/Creating a Multi-Cultural Wedding.jpg"
  };

  const blogPosts = [
    {
      title: "10 Essential Questions to Ask Your Wedding Photographer",
      excerpt: "Ensure you capture every precious moment with the right photographer. Here are the key questions that will help you make the perfect choice.",
      author: "Emma Rodriguez",
      date: "March 12, 2024",
      category: "Planning Tips",
      readTime: "5 min read",
      image: "/images/10 Essential Questions to Ask Your Wedding Photographer.jpg"
    },
    {
      title: "Real Wedding: Aisha & David's Elegant Fusion Celebration",
      excerpt: "A stunning blend of Moroccan and Jewish traditions created an unforgettable wedding filled with vibrant colors, meaningful ceremonies, and joyful celebration.",
      author: "Michael Johnson",
      date: "March 10, 2024", 
      category: "Real Weddings",
      readTime: "6 min read",
      image: "/images/Real Wedding Aisha & David's Elegant Fusion Celebration.jpg"
    },
    {
      title: "2024 Wedding Color Trends: From Sage Green to Warm Terracotta",
      excerpt: "Discover this year's most popular wedding color palettes and how to incorporate them into your special day for a modern, sophisticated look.",
      author: "Lisa Park",
      date: "March 8, 2024",
      category: "Trends & Inspiration", 
      readTime: "4 min read",
      image: "/images/2024 Wedding Color Trends From Sage Green to Warm Terracotta.jpg"
    },
    {
      title: "Understanding Indian Wedding Ceremonies: A Complete Guide",
      excerpt: "From Mehndi to Sangeet, explore the beautiful traditions and meanings behind each ceremony in a traditional Indian wedding celebration.",
      author: "Priya Sharma",
      date: "March 5, 2024",
      category: "Cultural Traditions",
      readTime: "10 min read",
      image: "/images/Understanding Indian Wedding Ceremonies A Complete Guide.jpg"
    },
    {
      title: "Vendor Spotlight: Enchanted Blooms Florist",
      excerpt: "Meet Maria Gonzalez, the creative genius behind Enchanted Blooms, who specializes in incorporating cultural flowers into wedding designs.",
      author: "David Kim", 
      date: "March 3, 2024",
      category: "Vendor Spotlights",
      readTime: "7 min read",
      image: "/images/Vendor Spotlight Enchanted Blooms Florist.jpg"
    },
    {
      title: "Budget-Friendly Wedding Planning: 15 Ways to Save Without Sacrificing Style",
      excerpt: "Create your dream wedding on any budget with these expert tips for maximizing your dollars while maintaining elegance and style.",
      author: "Jennifer Martinez",
      date: "March 1, 2024",
      category: "Planning Tips", 
      readTime: "9 min read",
      image: "/images/Budget-Friendly Wedding Planning 15 Ways to Save Without Sacrificing Style.jpg"
    }
  ];

  const popularPosts = [
    "How to Plan a COVID-Safe Wedding",
    "The Ultimate Wedding Planning Timeline",
    "Choosing the Perfect Wedding Venue",
    "Wedding Dress Shopping 101",
    "Creating Your Wedding Registry"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Wedding Planning Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert advice, real wedding stories, and cultural wedding traditions to inspire and guide your perfect celebration.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <Card className="shadow-elegant hover-lift overflow-hidden mb-16 bg-gradient-card">
              <div className="aspect-[2/1] relative overflow-hidden">
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground z-10">
                  Featured
                </Badge>
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-4 hover:text-primary transition-smooth cursor-pointer">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                  <Button className="btn-wedding-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                Browse by Category
              </h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className="btn-wedding-outline"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="shadow-card hover-lift bg-gradient-card cursor-pointer group">
                  <div className="aspect-[3/2] overflow-hidden">
                    {post.image.startsWith('/images/') ? (
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                      />
                    ) : (
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center h-full">
                        <span className="text-5xl group-hover:scale-110 transition-smooth">{post.image}</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-smooth" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button className="btn-wedding-primary">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">Search Blog</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair text-xl flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Popular Posts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {popularPosts.map((post, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-smooth block py-2 border-b border-border last:border-0"
                      >
                        {post}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Get the latest wedding planning tips and real wedding features delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input type="email" placeholder="Your email address" />
                  <Button className="btn-wedding-primary w-full">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Instagram Feed */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">Instagram</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div
                      key={index}
                      className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-smooth"
                    >
                      <span className="text-2xl">📸</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="btn-wedding-outline w-full mt-4">
                  Follow @eternalmoments
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;