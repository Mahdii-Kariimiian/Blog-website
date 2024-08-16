import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header-titles">
                <span className="header-title-small">React</span>
                <span className="header-title-large">Blog</span>
            </div>
            <img
                className="header-img"
                src="https://picsum.photos/1200/800"
                alt="blog image "
            />
        
            <Link to="/posts">
                <button className="header-button">Read Posts</button>
            </Link>
        </div>
    );
};

export default Header;
