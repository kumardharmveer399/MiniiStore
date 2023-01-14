import React from "react";

const Header = (props) => {
    return (
        <>
            <section id="page-header" class="about-header">


                <h2>{props.hname}</h2>

                <p>{props.pname}</p>


            </section>
        </>
    )
}


export default Header;