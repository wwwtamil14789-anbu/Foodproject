import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Cart = () => {
  const {
    cart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
  } = useCart();

  const deliveryCharge = cart.length > 0 ? 5.0 : 0.0;
  const grandTotal = cartTotal + deliveryCharge;

  return (
    <div className="product-container pt-5 mt-5 pb-5 min-vh-100">
      <div className="container">
        <div className="text-center mb-5 animate-fade-up">
          <h6 className="text-warning text-uppercase ls-2">Your Selection</h6>
          <h1 className="display-4">Your <span className="glow-text">Food Cart</span></h1>
          <p className="text-muted col-lg-6 mx-auto">
            {cart.length > 0
              ? 'Review your culinary items and customize quantity before ordering.'
              : 'Add delicious meals from our menu to get started.'}
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="row justify-content-center">
            <div className="col-md-6 text-center animate-fade-up">
              <div className="glass-card p-5">
                <div className="mb-4">
                  <i className="bi bi-cart-x text-warning" style={{ fontSize: '4rem' }}></i>
                </div>
                <h3 className="mb-3">Your Cart is Empty</h3>
                <p className="text-muted mb-4">
                  Looks like you haven't added anything to your cart yet. Explore our handcrafted menu items.
                </p>
                <Link to="/product" className="btn btn-warning rounded-pill px-4 py-2">
                  Browse Menu
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {/* Left Side: Cart Items */}
            <div className="col-lg-8 animate-fade-up stagger-1">
              <div className="d-flex flex-column gap-4">
                {cart.map((item) => (
                  <div key={item.id} className="glass-card overflow-hidden">
                    <div className="row g-0 align-items-center">
                      {/* Left Side: Image */}
                      <div className="col-md-4 col-sm-5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid w-100 h-100"
                          style={{
                            minHeight: '180px',
                            maxHeight: '220px',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      
                      {/* Right Side: Content */}
                      <div className="col-md-8 col-sm-7 p-4">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <div>
                            <span className="badge bg-warning text-dark mb-2">{item.category}</span>
                            <h4 className="mb-1 text-white">{item.name}</h4>
                            <small className="text-muted">Unit Price: {item.price}</small>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="btn btn-sm btn-outline-danger border-0 rounded-circle"
                            title="Remove item"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                          </button>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-4">
                          {/* Quantity Selector */}
                          <div className="d-flex align-items-center bg-dark rounded-pill p-1 border border-secondary">
                            <button
                              onClick={() => decrementQuantity(item.id)}
                              className="btn btn-sm btn-outline-warning rounded-circle d-flex align-items-center justify-content-center"
                              style={{ width: '30px', height: '30px', padding: 0 }}
                            >
                              -
                            </button>
                            <span className="mx-3 fw-bold text-white" style={{ minWidth: '20px', textAlign: 'center' }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => incrementQuantity(item.id)}
                              className="btn btn-sm btn-outline-warning rounded-circle d-flex align-items-center justify-content-center"
                              style={{ width: '30px', height: '30px', padding: 0 }}
                            >
                              +
                            </button>
                          </div>

                          {/* Dynamic Total Price */}
                          <div className="text-end">
                            <span className="text-muted d-block small">Subtotal</span>
                            <span className="h4 text-warning mb-0 fw-bold">
                              ${(item.numericPrice * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons below list */}
              <div className="d-flex justify-content-between mt-4">
                <Link to="/product" className="btn btn-outline-warning rounded-pill px-4">
                  ← Add More Items
                </Link>
                <button onClick={clearCart} className="btn btn-outline-danger rounded-pill px-4">
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Right Side: Order Summary */}
            <div className="col-lg-4 animate-fade-up stagger-2">
              <div className="glass-card p-4 position-sticky" style={{ top: '100px' }}>
                <h3 className="mb-4 text-white pb-2 border-bottom border-secondary">Order Summary</h3>
                
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Items Subtotal</span>
                  <span className="text-white">${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Delivery Charge</span>
                  <span className="text-white">${deliveryCharge.toFixed(2)}</span>
                </div>
                
                <hr className="text-secondary" />
                
                <div className="d-flex justify-content-between mb-4 align-items-center">
                  <span className="h5 text-white mb-0">Grand Total</span>
                  <span className="h3 text-warning mb-0 fw-bold">${grandTotal.toFixed(2)}</span>
                </div>

                <Link
                  to="/order"
                  className="btn btn-warning w-100 rounded-pill py-3 fw-bold text-uppercase tracking-wider shadow-lg"
                  style={{
                    boxShadow: '0 8px 24px rgba(255, 157, 0, 0.3)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Proceed to Checkout
                </Link>

                <div className="text-center mt-3">
                  <small className="text-muted">
                    Secure checkout. Tax will be calculated at payment step.
                  </small>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;