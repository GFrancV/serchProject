import React, { Component } from 'react';

class SerchBox extends Component{
    serchRef = React.createRef();

    serchImage = (e) => {
        e.preventDefault();
        const data = this.serchRef.current.value;

        this.props.serchImg(data);
    } 

    render(){
        return(
            <div className="container">
            <h2>Search Image:</h2>
            <form className="d-flex" onSubmit={this.serchImage}>
                <input ref={this.serchRef} className="searchBox form-control" type="search" placeholder="Search image" />
                <input className="btn btn-dark button" type="submit" value="Serch" />
            </form>
        </div>
        );
    }
}

export default SerchBox;