import React from "react";
import "./post.css";

const Post = () => {
    return (
        <div className="post">
            <img
                className="post-img"
                src="https://picsum.photos/800/400"
                alt="post image"
            />
            <div className="post-info">
                <div className="post-categories">
                    <span className="post-cat">Music</span>
                    <span className="post-cat">Lief</span>
                </div>
                <span className="post-title">
                    Lorem ipsum, dolor sit amet consectetur
                </span>
                <hr />
                <span className="post-date">1 hour ago</span>
            </div>
            <p className="post-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur ipsa incidunt quaerat repudiandae tempora illo rerum
                eligendi cumque minima nulla iusto, quisquam molestiae modi
                soluta natus, eveniet est. Facilis, ad.
            </p>
        </div>
    );
};

export default Post;
