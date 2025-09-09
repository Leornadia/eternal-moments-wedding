import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Clock, MapPin, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    budget: '',
    services: [],
    culturalConsiderations: '',
    hearAboutUs: '',
    message: ''
  });
  
  const { toast } = useToast();

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000', 
    '$25,000 - $50,000',
    '$50,000 - $75,000',
    '$75,000 - $100,000',
    'Over $100,000'
  ];

  const services = [
    'Full Wedding Planning',
    'Partial Planning', 
    'Day-of Coordination',
    'Cultural Ceremony Planning',
    'Destination Wedding',
    'Vendor Coordination'
  ];

  const referralSources = [
    'Google Search',
    'Instagram',
    'Friend Referral',
    'Past Client',
    'Wedding Fair',
    'Vendor Referral',
    'Other'
  ];

  const faqs = [
    {
      question: "How far in advance should I book your services?",
      answer: "We recommend booking 12-18 months in advance, especially for full planning services during peak season (May-October)."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! We offer flexible payment plans to make our services accessible. We'll work with you to create a schedule that fits your budget."
    },
    {
      question: "Can you help with cultural and religious ceremonies?",
      answer: "Absolutely! We specialize in multicultural weddings and have extensive experience with various traditions and customs."
    },
    {
      question: "What's your cancellation policy?", 
      answer: "We understand that circumstances change. Our cancellation policy varies by service level and is outlined in detail in our contract."
    },
    {
      question: "Do you travel for destination weddings?",
      answer: "Yes! We love destination weddings and have planned celebrations around the world. Travel costs are additional to planning fees."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Submitted!",
      description: "We'll get back to you within 24 hours to schedule your consultation.",
    });
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Let's Plan Your Dream Wedding
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start planning your perfect day? We'd love to hear about your vision and how we can bring it to life.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="font-playfair text-3xl text-foreground">
                  Schedule Your Consultation
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your dream wedding and we'll create a custom plan just for you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label className="text-foreground">Wedding Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !selectedDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Select your wedding date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="venue" className="text-foreground">Venue (if selected)</Label>
                      <Input
                        id="venue"
                        value={formData.venue}
                        onChange={(e) => setFormData(prev => ({...prev, venue: e.target.value}))}
                        placeholder="Venue name or location"
                      />
                    </div>
                    <div>
                      <Label className="text-foreground">Budget Range</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Services Interested In */}
                  <div>
                    <Label className="text-foreground mb-3 block">Services Interested In</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          />
                          <Label htmlFor={service} className="text-sm">{service}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cultural Considerations */}
                  <div>
                    <Label htmlFor="cultural" className="text-foreground">Cultural/Religious Considerations</Label>
                    <Textarea
                      id="cultural"
                      value={formData.culturalConsiderations}
                      onChange={(e) => setFormData(prev => ({...prev, culturalConsiderations: e.target.value}))}
                      placeholder="Tell us about any cultural traditions or religious ceremonies you'd like to incorporate"
                      rows={3}
                    />
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <Label className="text-foreground">How did you hear about us?</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({...prev, hearAboutUs: value}))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        {referralSources.map((source) => (
                          <SelectItem key={source} value={source}>{source}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-foreground">Tell us about your dream wedding</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                      placeholder="Share your vision, style preferences, must-haves, and any questions you have..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="btn-wedding-primary w-full text-lg py-3">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Schedule Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">hello@eternalmoments.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-muted-foreground">123 Wedding Avenue<br />Dreams City, DC 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground text-sm">
                      Mon-Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM<br />
                      Sun: By appointment only
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability Checker */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">Check Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Select a date to check our availability for consultations:
                  </p>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="pointer-events-auto"
                  />
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded"></div>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-400 rounded"></div>
                      <span>Limited availability</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded"></div>
                      <span>Fully booked</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Preview */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">Quick FAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {faqs.slice(0, 3).map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-sm text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Button variant="outline" className="btn-wedding-outline w-full mt-4">
                  View All FAQs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Consultation Types */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Choose Your Consultation Style
            </h2>
            <p className="text-xl text-muted-foreground">
              We offer flexible consultation options to fit your schedule and preference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-card hover-lift text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                  Virtual Consultation
                </h3>
                <p className="text-muted-foreground mb-6">
                  Connect with us from the comfort of your home via video call. Perfect for initial discussions and planning sessions.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>45-60 minute session</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Screen sharing capabilities</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Digital planning materials</span>
                  </li>
                </ul>
                <Button className="btn-wedding-primary">
                  Book Virtual Call
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover-lift text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                  In-Person Meeting
                </h3>
                <p className="text-muted-foreground mb-6">
                  Visit our beautiful office or we can meet at your chosen venue. Ideal for detailed planning and material reviews.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>60-90 minute session</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Physical inspiration boards</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Venue visit available</span>
                  </li>
                </ul>
                <Button className="btn-wedding-secondary">
                  Schedule In-Person
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;