import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="home">
        <button><Link to={`/signup`}>Sing Up</Link></button>
    </div>
    )
   
}