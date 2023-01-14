import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { Teampeople } from "./Card";
import p1 from "../img/pepole/1.png";
import p2 from "../img/pepole/2.png";
import p3 from "../img/pepole/3.png";


const Contact = () => {
    return (
        <>
            <Header hname='#lets_talk' pname='LEAVE A MESSAGE ,We love to hear from you !' />
            <section id="contact-details" className="section-p1">
                <div className="details">
                    <span>GET IN TOUCH</span>
                    <h2>Visit one of our agency locations or Contact us today</h2>
                    <h3>Head Office</h3>
                    <div>
                        <li>

                            <FontAwesomeIcon icon={faMapLocation} />
                            <p>Jawahar Navodaya vidyalaya</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>Contact@exmple.com</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} />
                            <p>Contact@exmple.com</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faClock} />
                            <p>Monday to saturday : 9.00 to 16.pm</p>
                        </li>
                    </div>

                </div>
                <div className="map">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1839.4122016139663!2d86.1451198287161!3d22.771897000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1673261440829!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> */}

                </div>

            </section>

            <section id="from-details">
                <form action="">
                    <span>LEAVE A MESSAGE</span>
                    <h2>We love to hear from you</h2>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="subject" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                    <button className="normal">Sumbit</button>

                </form>
                <div className="people">
                    <Teampeople image={p1}/>
                    <Teampeople image={p2}/>
                    <Teampeople image={p3}/>
                </div>
              </section >
          </>
  )
}

export default Contact;