import React from "react";
import Header from "./Header";
import { Product } from "./Card";

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


const Shope =()=>{
    return(
        <>
        <Header hname='#stayhome' pname='Save more with coupons & up to 70% off!!' />
               <div id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <div className="pro-container">

                    <Product image={pf1} />
                    <Product image={pf2} />
                    <Product image={pf3} />
                    <Product image={pf4} />
                    <Product image={pf5} />
                    <Product image={pf6} />
                    <Product image={pf7} />
                    <Product image={pf8} />
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
        </>
    )
}

export default Shope;