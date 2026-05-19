import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const carouselItems = [
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070",
      title: "Experience Culinary Excellence",
      subtitle: "Taste the finest gourmet creations prepared by world-class chefs."
    },
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2070",
      title: "Artisanal Pizzas",
      subtitle: "Hand-crafted with the freshest ingredients and traditional techniques."
    },
    {
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2080",
      title: "Wholesome Goodness",
      subtitle: "Nutritious and delicious meals delivered straight to your door."
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Carousel */}
      <Carousel fade indicators={false} controls={true} interval={5000} pause={false}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-img"
              src={item.image}
              alt={item.title}
            />
            <Carousel.Caption>
              <h1 className="display-1 animate-fade-up stagger-1">{item.title}</h1>
              <p className="lead animate-fade-up stagger-2 text-light opacity-75">{item.subtitle}</p>
              <div className="animate-fade-up stagger-3 mt-4">
                <Link to="/product" className="btn btn-warning btn-lg rounded-pill px-5 me-3 text-decoration-none">View Menu</Link>
                <Link to="/order" className="btn btn-outline-light btn-lg rounded-pill px-5 text-decoration-none">Book Table</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Featured Section */}
      <section className="py-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 animate-fade-up">
              <h2 className="display-4 mb-4">Why Choose <span className="glow-text">SPICES FOODS?</span></h2>
              <p className="text-muted lead">We believe that food is not just about sustenance, it's about an experience that delights all senses.</p>
              <div className="mt-4">
                <div className="d-flex mb-3">
                  <div className="p-3 bg-warning rounded-circle me-3" style={{height: '50px', width: '50px'}}></div>
                  <div>
                    <h5>Premium Quality</h5>
                    <p className="text-muted">Only the freshest organic ingredients.</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="p-3 bg-warning rounded-circle me-3" style={{height: '50px', width: '50px'}}></div>
                  <div>
                    <h5>Expert Chefs</h5>
                    <p className="text-muted">Mastering culinary arts for over a decade.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 animate-fade-up stagger-2">
              <div className="p-5 glass-card">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1974" 
                  alt="chef" 
                  className="img-fluid rounded-3 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;