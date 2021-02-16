import React from 'react'

function ListImages({image, tags}) {
    return(
    <div className="box">
        <img src={image} />
        <div className="box-content">
            <h3>Tags</h3>
            <p>{tags}</p>
        </div>
    </div>
    );
}

export default ListImages;