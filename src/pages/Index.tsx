
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/search/SearchBar';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { Shield, Search, Star, Users } from 'lucide-react';
import { featuredProperties, trendingProperties } from '@/data/mockData';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Properties',
      description: 'All listings are verified for safety and authenticity'
    },
    {
      icon: Search,
      title: 'Transparent Pricing',
      description: 'No hidden fees, clear pricing for all amenities'
    },
    {
      icon: Users,
      title: 'Trusted Hosts',
      description: 'Connect with verified, responsive property owners'
    },
    {
      icon: Star,
      title: 'Easy Booking',
      description: 'Simple process to find and secure your accommodation'
    }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal dark:text-white mb-6 animate-fadeInUp">
              Find Your Perfect{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                PG Home
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Discover safe, comfortable, and affordable paying guest accommodations
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8 animate-scaleIn" style={{animationDelay: '0.4s'}}>
              <SearchBar />
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <div>
                <div className="text-2xl font-bold text-primary dark:text-primary">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Properties</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary dark:text-secondary">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Locations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent dark:text-accent">1000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Tenants</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
              Why Choose FindMyPG?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We make finding the perfect PG accommodation simple, safe, and reliable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-light-gray dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-charcoal dark:text-white mb-2">
                Featured Properties
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Handpicked accommodations with excellent ratings
              </p>
            </div>
            <Link to="/explore">
              <Button variant="outline" className="dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">View All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property, index) => (
              <div 
                key={property.id}
                className="animate-fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Properties Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-charcoal dark:text-white mb-2">
                Trending Now
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Popular properties that are booking fast
              </p>
            </div>
            <Link to="/explore">
              <Button variant="outline" className="dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">Explore More</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingProperties.map((property, index) => (
              <div 
                key={property.id}
                className="animate-fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Own a Property? Partner with Us
          </h2>
          <p className="text-xl text-white/90 mb-8">
            List your PG and connect with thousands of potential tenants
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/partner">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                List Your Property
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
