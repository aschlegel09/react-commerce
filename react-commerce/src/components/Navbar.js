import React from "react";

function Navbar() {
    return (
        <div className="navbar z-depth-5 d-flex justify-content-between">
        <div className="p-2 bd-highlight">
            Flex Between
        </div>
                <a href="/" className="nav nav-link" data-hover="Match&rarr;&amp;&larr;Mix" data-active="Active!"><span>Mix&larr;&amp;&rarr;Match</span></a>
                <p className="nav nav-item info">E-Commerce w/ React</p>
        </div>
    )
};

export default Navbar;