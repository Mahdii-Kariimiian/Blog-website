import React from "react";
import "./header.css";

const Header = () => {
    return (
        <div>
            <div className="header-titles">
                <span className="header-title-small">React</span>
                <span className="header-title-large">Blog</span>
            </div>
            <img
                className="header-img"
                src="https://picsum.photos/800/400"
                alt="blog image "
            />
        </div>
    );
};

export default Header;
