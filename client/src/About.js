import React from 'react';

const About = () => {
  return (
    <div className="about-container pt-5 mt-5">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 animate-fade-up">
            <h6 className="text-warning text-uppercase ls-2">Our Story</h6>
            <h1 className="display-3 mb-4">A Legacy of <span className="glow-text">Taste</span></h1>
            <p className="lead text-muted">
              Founded in 2010, Foodopia began with a simple mission: to bring the authentic flavors of the world to your doorstep with a touch of modern elegance.
            </p>
            <p className="text-muted">
              What started as a small boutique kitchen has grown into a culinary destination. Our team of passionate chefs travels the globe to source the finest ingredients, ensuring that every dish we serve is a masterpiece of flavor and presentation.
            </p>
            <div className="row mt-5">
              <div className="col-4">
                <h2 className="mb-0">15+</h2>
                <small className="text-muted text-uppercase">Years</small>
              </div>
              <div className="col-4">
                <h2 className="mb-0">50+</h2>
                <small className="text-muted text-uppercase">Chefs</small>
              </div>
              <div className="col-4">
                <h2 className="mb-0">100k</h2>
                <small className="text-muted text-uppercase">Clients</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="position-relative">
              <div className="glass-card p-2 animate-fade-up stagger-2">
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070" 
                  alt="Fine Dining" 
                  className="img-fluid rounded-3 shadow-2xl"
                />
              </div>
              <div 
                className="position-absolute glass-card p-4 d-none d-md-block animate-fade-up stagger-3" 
                style={{bottom: '-30px', right: '-30px', maxWidth: '250px'}}
              >
                <h5 className="mb-3">Michelin Star Quality</h5>
                <p className="small text-muted mb-0">Recognized for excellence in culinary innovation and service.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="row mt-5 pt-5 text-center justify-content-center">
          <div className="col-lg-8 animate-fade-up">
            <h2 className="display-5 mb-5">Driven by <span className="text-warning">Passion</span></h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="glass-card p-4 h-100 stagger-1">
                  <div className="display-6 text-warning mb-3">a</div>
                  <h4>Organic</h4>
                  <p className="small text-muted">Sourced directly from local sustainable farms.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="glass-card p-4 h-100 stagger-2">
                  <div className="display-6 text-warning mb-3">b</div>
                  <h4>Crafted</h4>
                  <p className="small text-muted">Every meal is prepared by hand with precision.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="glass-card p-4 h-100 stagger-3">
                  <div className="display-6 text-warning mb-3">c</div>
                  <h4>Fresh</h4>
                  <p className="small text-muted">Delivered within minutes of preparation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;