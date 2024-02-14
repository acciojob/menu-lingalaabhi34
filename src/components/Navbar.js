import React from "react";
import { Link,NavLink } from "react-router-dom";


const Navbar=()=>{
    return(<div>
        <h1>Our Menu</h1>
<NavLink to="/all">All</NavLink>
<NavLink to="/breakfast">Breakfast</NavLink>
<NavLink to="/lunch">Lunch</NavLink>
<NavLink to="/shakes">Shakes</NavLink>

    </div>)
}
export default Navbar