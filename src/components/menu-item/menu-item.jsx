import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.css";

const MenuItem = ({title,image,linkUrl,size,history, match}) => {

  

    return(
        <div className={`${size} menu-item`} 
        
          onClick={() => history.push(`${match.url}${linkUrl}`) } 
        
        
        
        >


            <div className="bg-image"

                style={{ backgroundImage : `url(${image})` }}

            />

            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>

        </div>
    )
};

export default withRouter(MenuItem);