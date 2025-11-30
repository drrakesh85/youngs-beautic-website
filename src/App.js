import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    { name: 'Eyebrow Shaping', icon: '✨', description: 'Professional eyebrow threading and shaping' },
    { name: 'Variety Facials', icon: '💆‍♀️', description: 'Multiple facial treatments for glowing skin' },
    { name: 'Hair Removal', icon: '🌸', description: 'Gentle and effective hair removal services' }
  ];

  const products = [
    { name: 'Chaniya Choli - Rent', icon: '👗', description: 'Beautiful traditional wear available for rent' },
    { name: 'Chaniya Choli - Sale', icon: '🛍️', description: 'Exclusive collection available for purchase' }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Youngs Beautic</h1>
          <nav className="nav">
            <a href="#home" onClick={() => setActiveSection('home')}>Home</a>
            <a href="#services" onClick={() => setActiveSection('services')}>Services</a>
            <a href="#products" onClick={() => setActiveSection('products')}>Products</a>
            <a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to Youngs Beautic</h2>
          <p className="hero-subtitle">Your Destination for Beauty & Fashion in Surat</p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-secondary">Book Now</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services" id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="grid">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section products" id="products">
        <div className="container">
          <h2 className="section-title">Boutique Collection</h2>
          <div className="grid">
            {products.map((product, index) => (
              <div key={index} className="card">
                <div className="card-icon">{product.icon}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <i className="fas fa-phone"></i>
              <h3>Phone</h3>
              <a href="tel:9558825355">9558825355</a>
            </div>
            <div className="contact-card">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <a href="mailto:youngsbeautic@gmail.com">youngsbeautic@gmail.com</a>
            </div>
            <div className="contact-card">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Address</h3>
              <p>S12, E-F Shops, Anand Avenue<br/>Ugat Bhesan Road, Jahangirabad<br/>Surat - 395005</p>
            </div>
            <div className="contact-card">
              <i className="fab fa-instagram"></i>
              <h3>Instagram</h3>
              <a href="https://www.instagram.com/youngsbeautic" target="_blank" rel="noopener noreferrer">@youngsbeautic</a>
            </div>
          </div>
          <div className="payment-info">
            <h3>Payment</h3>
            <p><strong>GPay:</strong> youngsbeautic@oksbi</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Youngs Beautic. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/youngsbeautic" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;