import React from "react";
import Navbar from "./navbar/Navbar";
import Marousel from './main_caraousel/mCarousel'
import Scarousal from "./small_caraousel/scarousal"
 const App = () => {
    return (
        <div>
           <Navbar />
           <Marousel/>
           <Scarousal name="Trending"/>
           <Scarousal name="Top"/>
           <Scarousal name="New"/>
        </div>
    )
}
export default App;
