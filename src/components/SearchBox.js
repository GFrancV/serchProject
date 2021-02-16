import React, { useState } from 'react';

function SerchBox() {
    const [serch, setSerch] = useState('null');

    return(
        <div className="container">
            <h2>Search Image:</h2>
            <form className="d-flex">
                <input className="searchBox form-control" onChange={setSerch} type="search" placeholder="Search image" aria-label="Search" />
                <button className="btn btn-primary button btn-sm" type="submit">Search</button>
            </form>
        </div>
    );
}

export default SerchBox;