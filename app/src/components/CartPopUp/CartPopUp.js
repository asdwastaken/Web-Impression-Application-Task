import './cartPopUp.css';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeCart } from "../../features/cartSlice";
import beltImage from '../../content/images/belt-image.png'

export default function CartPopUp() {


    const dispatch = useDispatch();

    return (
        <div className="cart">
            <div className="cart-menus">
                <NavLink to="/cart" className="cart-menu-link">Cart</NavLink>
                <NavLink to="/checkout" className="cart-menu-link">Checkout</NavLink>
                <NavLink to="/shipping" className="cart-menu-link">Shipping</NavLink>
                <NavLink to="/done" className="cart-menu-link">Done</NavLink>
            </div>

            <div className="cart-products-container">
                <div className="cart-product-container">
                    <img src={beltImage} />
                    <div className="cart-product-info">
                        <h1>Gucci Leather belt</h1>
                        <div className="product-size">
                            <span>Size </span>
                            <span>70cm</span>
                        </div>
                        <div className="product-colors">
                            <span>Color </span>
                            <div className="colors">
                                <div className="color"></div>
                                <div className="color"></div>
                            </div>
                        </div>
                    </div>

                    <div className="cart-product-counter">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <div className="cart-product-price">
                        <span>$</span>
                        <span id="price">32</span>
                    </div>

                    <Link to='/' onClick={() => dispatch(closeCart())}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="close-btn">
                            <path d="M6.34314 6.34326L17.6568 17.657" stroke="#D1D1D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.6568 6.34326L6.34314 17.657" stroke="#D1D1D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}