import React from "react";


import f1 from "../img/feature/f1.png"
import f2 from "../img/feature/f2.png"
import f3 from "../img/feature/f3.png"
import f4 from "../img/feature/f4.png"
import f5 from "../img/feature/f5.png"
import f6 from "../img/feature/f6.png";

import pf1 from "../img/product/f1.jpg"
import pf2 from "../img/product/f2.jpg"
import pf3 from "../img/product/f3.jpg"
import pf4 from "../img/product/f4.jpg"
import pf5 from "../img/product/f5.jpg"
import pf6 from "../img/product/f6.jpg"
import pf7 from "../img/product/f7.jpg"
import pf8 from "../img/product/f8.jpg";
import n1 from "../img/product/n1.jpg"
import n2 from "../img/product/n2.jpg"
import n3 from "../img/product/n3.jpg"
import n4 from "../img/product/n4.jpg"
import n5 from "../img/product/n5.jpg"
import n6 from "../img/product/n6.jpg"
import n7 from "../img/product/n7.jpg"
import n8 from "../img/product/n8.jpg";

import SmallCard from "./Card";
import { Product } from "./Card";

const Home = () => {
    return (
        <>
            <div id="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>Save more with coupons & up to 80% off!!</p>
                <button>Shop Now</button>

            </div>
            <div className="star">
            </div>
            <div id="feature" className="section-p1">

                <SmallCard hname='Free Shipping' image={f1} />
                <SmallCard image={f2} hname='Online Order' />
                <SmallCard hname='Save Money' image={f3} />
                <SmallCard hname='Promotions' image={f4} />
                <SmallCard hname='Happy Sells' image={f5} />
                <SmallCard hname='F24/7 Support' image={f6} />



            </div>

            <div id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Morden Design</p>
                <div class="pro-container">
                    <Product image={pf1} />
                    <Product image={pf2} />
                    <Product image={pf3} />
                    <Product image={pf4} />
                    <Product image={pf5} />
                    <Product image={pf6} />
                    <Product image={pf7} />
                    <Product image={pf8} />

                </div>
            </div>

            <section id="banner" class="section-m1">
                <h4>Repair Services</h4>
                <h2>Up to <span >70% Off</span> All  t-Shirts & Accessories</h2>
                <button class="normal">Explore More</button>
            </section>

            <div id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Morden Design</p>
                <div class="pro-container">

                    <Product image={n1} />
                    <Product image={n2} />
                    <Product image={n3} />
                    <Product image={n4} />
                    <Product image={n5} />
                    <Product image={n6} />
                    <Product image={n7} />
                    <Product image={n8} />

                </div>
            </div>

            <section id="sm-banner" class="section-p1">
                <div class="banner-box">
                    <h4>Crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic dress is on sale at cara</span>
                    <button class="white">Learn More</button>

                </div>
                <div class="banner-box banner-box2">
                    <h4>spring/summer</h4>
                    <h2>upcomming season</h2>
                    <span>The best classic dress is on sale at cara</span>
                    <button class="white">Collection</button>

                </div>

            </section>

            <section id="banner3">
                <div className="banner-box ">
                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>

                </div>
                <div className="banner-box banner-box2">
                    <h2>NEW FOOTWEAR COLLECTION</h2>
                    <h3>summer/spring 2023</h3>

                </div>
                <div className="banner-box banner-box3 ">
                    <h2>T-SHIRTS</h2>
                    <h3>New Trendy Prints</h3>

                </div>

            </section>

        </>
    )
}

export default Home;