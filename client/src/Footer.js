import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-section py-5 mt-5">
            <div className="container">
                <div className="row g-4">
                    {/* Section 1: About Food */}
                    <div className="col-lg-5 col-md-6">
                        <h6 className="text-warning text-uppercase mb-3 ls-2">SpiceFoods</h6>
                        <h2 className="display-6 text-white mb-4">Exceptional culinary experiences for the modern palate.</h2>
                        <p className="text-muted pe-lg-5">
                            We craft and deliver authentic spice-infused delicacies with a focus on quality, hygiene, and long-term culinary delight.
                        </p>
                    </div>

                    {/* Section 2: Explore */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Explore</h5>
                        <ul className="list-unstyled footer-links">
                            <li className="mb-2"><Link to="/" className="text-muted text-decoration-none hover-warning">Home</Link></li>
                            <li className="mb-2"><Link to="/about" className="text-muted text-decoration-none hover-warning">About</Link></li>
                            <li className="mb-2"><Link to="/product" className="text-muted text-decoration-none hover-warning">Products</Link></li>
                            <li className="mb-2"><Link to="#" className="text-muted text-decoration-none hover-warning">Orders</Link></li>
                        </ul>
                    </div>

                    {/* Section 3: Contact */}
                    <div className="col-lg-4 col-md-12">
                        <h5 className="text-white mb-4">Contact</h5>
                        <div className="d-flex mb-3">
                            <div className="text-warning me-3">📍</div>
                            <span className="text-muted">123, Spice Garden Road, Ganapathy, Coimbatore</span>
                        </div>
                        <div className="d-flex mb-3">
                            <div className="text-warning me-3">📞</div>
                            <span className="text-muted">+91 98765 43210 / +91 90123 45678</span>
                        </div>
                        <div className="d-flex mb-3">
                            <div className="text-warning me-3">✉️</div>
                            <span className="text-muted">contact@spicefoods.com</span>
                        </div>
                        <div className="d-flex mb-3">
                            <div className="text-warning me-3">🌐</div>
                            <span className="text-muted">www.spicefoods.com</span>
                        </div>
                    </div>
                </div>

                <hr className="my-5 opacity-100 color-white" />

                <div className="text-center text-muted small">
                    © 2026 SpiceFoods. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
