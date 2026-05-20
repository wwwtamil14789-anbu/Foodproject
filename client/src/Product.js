import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const Product = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const products = [
    {
      id: 1,
      name: "Gourmet Truffle Burger",
      price: "$ 18.99",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600",
      category: "Burgers"
    },
    {
      id: 2,
      name: "Wild Mushroom Pizza",
      price: "$ 22.50",
      image: "https://images.ctfassets.net/trvmqu12jq2l/5aAbJvULvvgV9pkCJ38Ygn/1438fc7b06946a3d93153f1f4af1a868/CxBlog-DD-Miami-Pizza-IronsideKitchen.jpg?q=70&w=1208",
      category: "Pizza"
    },
    {
      id: 3,
      name: "Aged Ribeye Steak",
      price: "$ 34.99",
      image: "https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&q=80&w=600",
      category: "Steaks"
    },
    {
      id: 4,
      name: "Lobster Ravioli",
      price: "$ 28.00",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600",
      category: "Pasta"
    },
    {
      id: 5,
      name: "Atlantic Salmon",
      price: "$ 26.50",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600",
      category: "Seafood"
    },
    {
      id: 6,
      name: "Quinoa Buddha Bowl",
      price: "$ 16.00",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
      category: "Vegetarian"
    },
    {
      id: 7,
      name: "Tandoori Chicken",
      price: "$ 19.99",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=600",
      category: "Main Course"
    },
    {
      id: 8,
      name: "Artisan Sushi Set",
      price: "$ 32.00",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600",
      category: "Sushi"
    }
  ];

  return (
    <div className="product-container pt-5 mt-5 pb-5">
      <div className="container">
        <div className="text-center mb-5 animate-fade-up">
          <h6 className="text-warning text-uppercase ls-2">Curated Menu</h6>
          <h1 className="display-4">Our <span className="glow-text">Masterpieces</span></h1>
          <p className="text-muted col-lg-6 mx-auto">Explore our selection of premium dishes, crafted with passion and the finest seasonal ingredients.</p>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div key={product.id} className={`col-md-6 col-lg-3 animate-fade-up stagger-${(index % 4) + 1}`}>
              <div className="glass-card overflow-hidden h-100">
                <div className="position-relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid w-100"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-warning text-dark rounded-pill px-3 py-2">{product.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="mb-2">{product.name}</h5>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="h4 text-warning mb-0">{product.price}</span>
                    <button 
                      className="btn btn-sm btn-outline-warning rounded-pill px-3"
                      onClick={() => {
                        addToCart(product);
                        navigate('/Cart');
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;