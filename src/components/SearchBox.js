import React from 'react';

function SerchBox() {
    return(
        <div className="container">
            <h2>Search Image:</h2>
            <form className="d-flex">
                <input className="searchBox form-control" type="search" placeholder="Search image" aria-aria-label="Search" />
                <button className="btn btn-primary button btn-sm" type="submit">Search</button>
            </form>
        </div>
    );
}

export default SerchBox;