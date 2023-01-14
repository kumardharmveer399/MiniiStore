import React, { useState } from 'react';
import copy from "copy-to-clipboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fabrands, fainstagram, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import logo from "../src/image/ace.png";




const Footer = () => {
    return (
        <>
            <section id="newsletter" class="section-p1" className="section-m1" >
                <div className="newstext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail Updates about our latest shop and  <span> specials offers</span></p>
                </div>
                <div className="from">
                    <input type="text" placeholder="Your email address"/>
                        <button className="normal">Sign Up</button>
                </div>
            </section>


            <footer className="section-p1">
                <div className="col">
                    <img className="logo" src="img/logo2.png" alt="" />
                        <h4>Contact</h4>
                        <p> <strong>Address :</strong>  Deoghar Jharkhand</p>
                        <p> <strong>Phone :</strong> +91 *****</p>
                        <p> <strong>Hours :</strong> 10:00 - 18:00,  Mon -Sat</p>

                        <div className="follow">
                            <h4>Follow Us</h4>
                            <div className="icon">
                                <i class="fa fa-facebook"></i>
                                <i class="fa fa-twitter"></i>
                                <i class="fa fa-instagram"></i>
                                <i class="fa fa-youtube"></i>
                                <i class="fa fa-linkedin"></i>
                            </div>
                        </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="#">About us</a>
                    <a href="#">privacy policy</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact Us</a>

                </div>
                <div className="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">Track My Oder</a>
                    <a href="#">Help</a>

                </div>
                <div className="col install">
                    <h4>Install App</h4>
                    <p>From App Store and Play Store</p>
                    <div className="row">
                        <img src="img/pay/app.jpg" alt="" />
                            <img src="img/pay/play.jpg" alt="" />

                            </div>
                            <p>Secured Pyment Gateways</p>
                            <img src="img/pay/pay.png" alt="" />

                            </div>


                            <div className="copyright">
                                <p> @ 2023  Mini Store : Using React Tmaplate </p>
                            </div>
                        </footer>
                    </>
                    )
   
}




                    export default Footer;