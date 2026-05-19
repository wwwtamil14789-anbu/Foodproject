import { Link, NavLink } from "react-router-dom";   
import { useCart } from "./CartContext";

const Navbar = () => {
    const { cartCount } = useCart();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand fs-2 glow-text" to="/">
                    SPICE<span className="text-white">FOODS</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">      
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">   
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/order">Order</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link d-flex align-items-center" to="/Cart">
                                Cart
                                {cartCount > 0 && (
                                    <span className="badge bg-warning text-dark ms-2 rounded-pill px-2 py-1" style={{ fontSize: '0.75rem' }}>
                                        {cartCount}
                                    </span>
                                )}
                            </NavLink>
                        </li>   
                        <li className="nav-item ms-lg-4">
                            <Link className="btn btn-outline-warning rounded-pill px-4 text-decoration-none" to="/Product">Order Now</Link>
                        </li>
                    </ul>
                </div>
            </div>  
        </nav>
    );
}

export default Navbar;