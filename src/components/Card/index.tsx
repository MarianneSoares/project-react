import { Link } from "react-router-dom";
import "./styles.css";
import React from "react";

type CardProps = {
    title: string;
    route: string;
    image?:React.ReactNode;   
}


export const Cards = ({ image, title, route }: CardProps) =>{
    return(
        <Link to={route} style={{textDecoration:"none"}}>
            <div className="cards">
                <div className="image">
                    {image}
                    {title}
                </div>
            </div>

        </Link>
    )
}