import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Heart, Calendar, Users, Sparkles, Crown } from 'lucide-react';
import { getImagePath } from '@/lib/image-utils';


const Services = () => {
  const services = [
    {
      title: "Full Planning Service",
      price: "Starting at $5,000",
      description: "Complete wedding planning from engagement to your special day",
      icon: Crown,
      features: [
        "12+ months of planning support",
        "Unlimited consultations",
        "Vendor sourcing and management",
        "Budget planning and tracking",
        "Timeline and checklist management",
        "Cultural ceremony coordination",
        "Day-of coordination included"
      ]
    },
    {
      title: "Partial Planning Service", 
      price: "Starting at $2,500",
      description: "Perfect for couples who want professional guidance for specific aspects",
      icon: Heart,
      features: [
        "6 months of planning support",
        "Monthly consultations",
        "Vendor recommendations",
        "Timeline assistance",
        "Cultural tradition guidance",
        "Month-of coordination"
      ]
    },
    {
      title: "Day-Of Coordination",
      price: "Starting at $1,200", 
      description: "Stress-free wedding day management and execution",
      icon: Calendar,
      features: [
        "Pre-wedding consultation",
        "Vendor coordination",
        "Timeline management",
        "Ceremony and reception coordination",
        "Emergency problem solving",
        "Bridal party assistance"
      ]
    }
  ];

  const culturalSpecialties = [
    { name: "Indian Weddings", description: "Multi-day ceremonies, traditional rituals" },
    { name: "African Celebrations", description: "Jumping the broom, cultural attire" },
    { name: "Chinese Traditions", description: "Tea ceremonies, dragon and phoenix symbolism" },
    { name: "Jewish Ceremonies", description: "Chuppah, ketubah signing, hora dance" },
    { name: "Muslim Weddings", description: "Nikah, mehndi, traditional celebrations" },
    { name: "Latino Fiestas", description: "Mariachi, unity coins, cultural dances" }
  ];

  const faqs = [
    {
      question: "How far in advance should we book your services?",
      answer: "We recommend booking 12-18 months in advance for full planning services, especially during peak wedding season (May-October). However, we can accommodate shorter timelines based on availability."
    },
    {
      question: "Do you provide services for destination weddings?",
      answer: "Yes! We love destination weddings and have experience planning celebrations around the world. Travel expenses are additional to our planning fees."
    },
    {
      question: "Can you help with cultural and religious ceremonies?",
      answer: "Absolutely! We specialize in multicultural weddings and have extensive experience with various cultural and religious traditions. We work closely with cultural advisors and religious leaders."
    },
    {
      question: "What's included in your vendor network?",
      answer: "Our network includes vetted photographers, caterers, florists, venues, entertainment, and specialty cultural vendors. We've built relationships with the best in the industry."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-4 text-center">
          <nav className="text-sm text-muted-foreground mb-8">
            <span>Home</span> <span className="mx-2">•</span> <span className="text-primary">Services</span>
          </nav>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Wedding Planning Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From intimate ceremonies to grand celebrations, we create unforgettable moments that honor your love story and cultural heritage.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="shadow-card hover-lift bg-gradient-card">
                  {(index === 0 || index === 1 || index === 2) && (
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={
                          index === 0 ? getImagePath("images/wedding planner.jpg") :
                          index === 1 ? getImagePath("images/Partial Planning Service.jpg") :
                          getImagePath("images/Day-Of Coordination.jpg")
                        }
                        alt={`${service.title} service`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-playfair text-2xl text-foreground">
                      {service.title}
                    </CardTitle>
                    <p className="text-3xl font-bold text-primary">{service.price}</p>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="btn-wedding-primary w-full">
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cultural Specialties */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Cultural Wedding Specialties
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We honor and celebrate diverse cultural traditions, ensuring every ceremony reflects your heritage with authenticity and respect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalSpecialties.map((specialty, index) => (
              <Card key={index} className="shadow-card hover-lift">
                <CardContent className="p-6 text-center">
                  <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    {specialty.name}
                  </h3>
                  <p className="text-muted-foreground">{specialty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-center text-foreground mb-16">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">
            Ready to Start Planning Your Dream Wedding?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create a celebration that perfectly reflects your love story and cultural heritage.
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary" className="btn-wedding-secondary">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Planning Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;