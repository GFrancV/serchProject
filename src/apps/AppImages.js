import React, { useState, useEffect } from 'react';
import ListImages from '../components/ListImages';
import GetImages from '../services/GetImages';

function AppImages() {
    const [images, setImgaes] = useState([]);
    
    useEffect(function () {
        GetImages({keyword: 'luz'}).then(images => setImgaes(images));
    }, []);

    return(
        <div className="container">
            {
                images.map(img => 
                    <ListImages
                        key = {img.id}
                        tags = {img.tags} 
                        image = {img.webformatURL}
                    />)
            }
        </div>
    );
}

export default AppImages;
