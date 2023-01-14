import React from "react";
import Header from "./Header";
import v1 from "../img/about/1.mp4";
import SmallCard from "./Card";

import f1 from "../img/feature/f1.png"
import f2 from "../img/feature/f2.png"
import f3 from "../img/feature/f3.png"
import f4 from "../img/feature/f4.png"
import f5 from "../img/feature/f5.png"
import f6 from "../img/feature/f6.png";
import a6 from "../img/about/a6.jpg";




const About = () => {
    return (
        <>
            <Header />
            <section id="about-head" class="section-p1">
                <img src={a6} alt="" />
                <div>
                    <h2>Who We Are?</h2>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem, harum pariatur omnis illo minus neque hic sed explicabo, distinctio consequatur eaque asperiores ullam, fuga enim similique eligendi fugit vitae.</p>
                    <abbr title="">Create stunning images with as much as much or as title control as you like thanks to a choice of Basic and Creative mode.
                        <br /><br />

                        <marquee bgcolor="#ccc" loop="-1" scrollamount="'5" width="100%"> Create stunning images with as much as much or as title control as you like thanks to a choice of Basic and Creative mode.

                        </marquee>
                    </abbr>
                </div>
            </section>

            <section id="about-app" class="section-p1">
                <h1>Download this <a href="#">App</a></h1>
                <div class="vedio">
                    <video autoplay muted loop src={v1}></video>
                </div>
            </section>

            <section id="feature" class="section-p1">
            <SmallCard hname='Free Shipping' image={f1} />
                <SmallCard image={f2} hname='Online Order' />
                <SmallCard hname='Save Money' image={f3} />
                <SmallCard hname='Promotions' image={f4} />
                <SmallCard hname='Happy Sells' image={f5} />
                <SmallCard hname='F24/7 Support' image={f6} />
            </section>
        </>
    )
}

export default About;