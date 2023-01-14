import React from "react";
import { Blogcard } from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

import a1 from '../img/blog/a1.png';
import b1 from '../img/blog/b1.jpg';
import b2 from '../img/blog/b2.jpg';
import b3 from '../img/blog/b3.jpg';
import b4 from '../img/blog/b4.jpg';
import b5 from '../img/blog/b5.jpg';

const Blog = () => {
    return (
        <>

            <section id="blog">
                <Blogcard image={a1} />
                <Blogcard image={b1} />
                <Blogcard image={b2} />
                <Blogcard image={b3} />
                <Blogcard image={b4} />
                <Blogcard image={b5} />
            </section>


            <section id="pagination" class="section-p1">
                <a href="#">1</a>
                <a href="#">2</a>

                <a href="#"><FontAwesomeIcon icon={faArrowAltCircleRight} /></a>

            </section>
        </>
    )
}

export default Blog;