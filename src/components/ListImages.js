import React, {Component} from 'react'

function ListImages({image, tags}) {
    return(
        <div className="container">
            <img src={image} />
            <p>{tags}</p> 
        </div>
    );
}

export default ListImages;