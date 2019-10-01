import React from 'react';
import {Link} from 'react-router-dom';

function TodoHome (props) {
    const routeToList = e => {
        e.preventDefault();
        props.history.push("/todo-list")
    }
    
    return (
        <div className="home">
            <img className="home-image"
            src="https://www.jucarii-pentru-copii.info/data/archive/img/2865023840.jpeg"
            alt=""
            />
            <div className="scroll-down">
            <Link onClick={routeToList} className="home-btn">
                <span></span>
                <span></span>
                <span></span>
            </Link>
            </div>
        </div>
    )
}

export default TodoHome;