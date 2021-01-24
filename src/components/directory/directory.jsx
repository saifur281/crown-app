import React, { Component } from "react";
import "./directory.css";
import DIRECTORY_DATA from "./directory-data"
import MenuItem from "../menu-item/menu-item";

class Directory extends Component {

    state = {

        sections : DIRECTORY_DATA
    }


    render(){

        const {sections} = this.state

        return(

            <div className="directory">

            {
                sections.map(({id, ...otherProps}) => <MenuItem key={id} {...otherProps} /> )
            }

            </div>
        )
    }
};


export default Directory;