import React from 'react';

const apiKey = "20287765-49fefe6d81e34cb352ae34d0f";

function GetImages({keyword}) {
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${keyword}`

    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const {hits = []} = response;
            const img = hits.map (images => {
                const {id, webformatURL, tags} = images;
                return {id, webformatURL, tags};
            })
            return img;
        });
}

export default GetImages;