import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const SmallCard = (props) => {
    return (
        <>
            {/* <div id="feature" className="section-p1"> */}
            <div className="fe-box">
                <img src={props.image} alt="" />
                <h6>{props.hname}</h6>
            </div>
            {/* </div> */}
        </>
    )
}

export default SmallCard;

const Product = (props) => {
    return (
        <div className="pro">
            <img src={props.image} alt="" />
            <div className="des">
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <h4>₹4</h4>
            </div>
            <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
        </div>
    )
}

export { Product };

const Blogcard = (props) => {
    return (
        <>
            <div className="blog-box">
                <div className="blog-img">
                    <img src={props.image} alt=" " />
                </div>
                <div className="blog-details">
                    <h4>The Cotton- Jersey Zip-Up Hoodies</h4>
                    <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies wolf chartreuse irony godard...</p>
                    <a href="#">CONTINUE READING </a>

                </div>
                <h1>10/01</h1>


            </div>
        </>
    )
}
export {Blogcard};

const Teampeople =(props)=>{
    return(
        <>
            <div>
            <img src={props.image} alt=""/>
            <p><span>Unkonwn</span>Senior Marketing Manager <br/>Phone : +91**** <br/> Email :email@gmail.com</p>
        </div>
        </>
    )
}
export {Teampeople};

