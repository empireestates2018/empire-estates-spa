import React, { useState } from 'react';
import './Properties.css';

// Import property images so that the bundler (e.g., Webpack/Vite) correctly processes them
import houseImg from '../utils/house.jpeg';

// If you have multiple different images, import them here (e.g., houseImg2, houseImg3, ...)
// For now, we will reuse the same image for demonstration purposes.
const propertyImages = [houseImg, houseImg, houseImg, houseImg];

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  status: string;
  featured?: boolean;
}

const Properties: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const properties: Property[] = [
    {
      id: 1,
      title: 'Modern House',
      location: 'Kurnool, Andhra Pradesh, India',
      price: '₹85,00,000',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1554.372,
      type: 'House',
      status: 'For Sale',
      featured: true,
    },
    {
      id: 2,
      title: 'Modern House',
      location: 'Kurnool, Andhra Pradesh, India',
      price: '₹85,00,000',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1554.372,
      type: 'House',
      status: 'For Sale',
    },
    {
      id: 3,
      title: 'Modern house',
      location: 'Kurnool, Andhra Pradesh, India',
      price: '₹85,00,000',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1554.372,
      type: 'House',
      status: 'For Sale',
    },
    {
      id: 4,
      title: 'Modern House',
      location: 'Kurnool, Andhra Pradesh, India',
      price: '₹85,00,000',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1554.372,
      type: 'House',
      status: 'For Sale',
    },
  ];

  const filterOptions = [
    { value: 'all', label: 'All Properties'},
  ]; 

  const filteredProperties = activeFilter === 'all' 
    ? properties 
    : properties.filter(property => property.type === activeFilter);

  const toggleFavorite = (propertyId: number) => {
    setFavorites((prev: number[]) => 
      prev.includes(propertyId)
        ? prev.filter((id: number) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const formatPrice = (price: string) => {
    return price.replace(/,/g, ',');
  };

  return (
    <div className="properties">
      <div className="container">
        <div className="properties-header">
          <h1>Featured Properties</h1>
          <p className="properties-subtitle">
            Discover our curated collection of luxury properties in prime locations. 
            Each property is carefully selected to meet the highest standards of quality and elegance.
          </p>
        </div>

        <div className="properties-filter">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              className={`filter-btn ${activeFilter === option.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="properties-grid">
          {filteredProperties.map((property, index) => (
            <div 
              key={property.id} 
              className="property-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="property-image">
                <img 
                  src={propertyImages[index % propertyImages.length]} 
                  alt={property.title}
                  className="property-img"
                />
                <div className="property-overlay">
                  <h4>{property.title}</h4>
                  <span className="property-type">{property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span>
                </div>
                
                {property.featured && (
                  <div className="property-badge">Featured</div>
                )}
                
                <button 
                  className="property-favorite"
                  onClick={() => toggleFavorite(property.id)}
                  title={favorites.includes(property.id) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  {favorites.includes(property.id) ? '❤️' : '🤍'}
                </button>
              </div>
              
              <div className="property-details">
                <h3>{property.title}</h3>
                <p className="property-location">
                  📍 {property.location}
                </p>
                <p className="property-price">{formatPrice(property.price)}</p>
                
                <div className="property-specs">
                  <div className="property-spec">
                    <span className="property-spec-icon">🛏️</span>
                    <span>{property.bedrooms} Bed{property.bedrooms !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="property-spec">
                    <span className="property-spec-icon">🚿</span>
                    <span>{property.bathrooms} Bath{property.bathrooms !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="property-spec">
                    <span className="property-spec-icon">📐</span>
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
                
                <div className="property-actions">
                  <button className="btn-view-details">
                    View Details
                  </button>
                  <button 
                    className="btn-contact"
                    title="Contact Agent"
                  >
                    📞
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--gray-600)' }}>
            <h3>No properties found</h3>
            <p>Try adjusting your filter to see more properties.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
