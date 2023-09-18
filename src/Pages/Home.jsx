import React from "react"; 
import "./Home.scss"; 

import HomeHeader from "../Components/HomeHeader/HomeHeader";
import HomeSpecs from "../Components/HomeSpecs/HomeSpecs";
import HomeImages from "../Components/HomeImages/HomeImages";
//import HomeCommerce from "../Components/HomeCommerce/HomeCommerce";

const Home= ()=> {

    return( 
        <div>
            <HomeHeader></HomeHeader>
            <HomeSpecs></HomeSpecs>
            <HomeImages></HomeImages>
            
        </div>
    )
}

export default Home;