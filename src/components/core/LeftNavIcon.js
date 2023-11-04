import React, { useState } from "react";

export default function LeftNavIcon(props){
    return (
        <div className= "leftbar-img-wrapper">
            <img src={props.logo} alt={props.altText} />
            <span>{props.text}</span>
        </div>
    )

}