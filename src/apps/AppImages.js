import React, { useState, useEffect } from 'react';
import ListImages from '../components/ListImages';
import SerchBox from '../components/SearchBox';
import GetImages from '../services/GetImages';

function AppImages() {
    const [images, setImgaes] = useState([]);

    function serchImg(serch) {
        GetImages({keyword: serch}).then(images => setImgaes(images));
    };
    
    return(
        <div className="container">
            <SerchBox 
                query = {serchImg} 
            />
            <div className="container">
                {
                    images.map(img => 
                    <ListImages 
                        key = {img.id}
                        image = {img.webformatURL}
                        tags = {img.tags}
                        
                    /> )
                }
            </div>
                
        </div>
    );
}

export default AppImages;
