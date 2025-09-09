import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import clientFirstLogo from '@/assets/client-first-logo.png';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Vendors', href: '/vendors' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActivePage = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md'
        }`}
        style={{boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'}}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center space-x-5">
              <a 
                href="https://clientfirstdigital.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img 
                  src="https://raw.githubusercontent.com/Almeida2019/images/refs/heads/main/Client-First%20Digital/Client%20First%20light%20theme%20logo.webp" 
                  alt="Client First Digital" 
                  className="w-16 h-auto md:w-18"
                />
              </a>
              <Link to="/" className="flex flex-col">
                <span className="font-playfair text-3xl md:text-4xl font-bold leading-none" style={{color: '#2C2C2C', letterSpacing: '0.5px'}}>
                  Eternal Moments
                </span>
                <span className="text-xs text-gray-600 mt-1" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  Luxury Wedding Planning
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-smooth uppercase tracking-wide text-sm font-medium ${
                    isActivePage(item.href)
                      ? 'font-semibold'
                      : 'hover:opacity-80'
                  }`}
                  style={{
                    color: isActivePage(item.href) ? '#C9A96E' : '#2C2C2C',
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '1px'
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="default" 
                className="ml-4 rounded-full px-6 py-2 text-sm font-semibold uppercase transition-all hover:transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: '#C9A96E',
                  color: '#FFFFFF',
                  border: 'none',
                  letterSpacing: '1px'
                }}
              >
                Get Started
              </Button>
              

            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-medium transition-smooth ${
                        isActivePage(item.href)
                          ? 'font-semibold'
                          : 'hover:opacity-80'
                      }`}
                      style={{
                        color: isActivePage(item.href) ? '#C9A96E' : '#2C2C2C'
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button 
                    className="mt-6 w-full rounded-full py-3 font-semibold uppercase"
                    style={{
                      backgroundColor: '#C9A96E',
                      color: '#FFFFFF',
                      border: 'none'
                    }}
                  >
                    Get Started
                  </Button>
                  

                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src={clientFirstLogo} 
                  alt="Client First Digital" 
                  className="h-8 w-auto filter invert"
                />
                <span className="font-playfair text-xl font-bold">
                  Eternal Moments
                </span>
              </div>
              <p className="text-background/80 mb-4">
                Luxury wedding planning celebrating love in all cultures. Creating your perfect day with elegance and expertise.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-background/80 hover:text-background transition-smooth"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-playfair text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-background/80">
                <li>Full Planning</li>
                <li>Partial Planning</li>
                <li>Day-of Coordination</li>
                <li>Cultural Ceremonies</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-playfair text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-background/80">
                <p>📧 hello@eternalmoments.com</p>
                <p>📞 (555) 123-4567</p>
                <p>📍 123 Wedding Ave, Dreams City</p>
                <p className="text-sm mt-4">
                  Powered by{' '}
                  <span className="font-medium text-background">Client First Digital</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;