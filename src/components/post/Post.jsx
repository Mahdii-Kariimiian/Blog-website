import { Link } from "react-router-dom";
import "./post.css";
import { myContext } from "../../App";
import { useContext } from "react";

const Post = () => {
    const posts = useContext(myContext);

    const renderPosts = posts.map((post, index) => {
        return (
            <div key={post.id} className="post">
                <img
                    className="post-img"
                    src="https://picsum.photos/800/400"
                    alt="post image"
                />
                <div className="post-info">
                    <div className="post-categories">
                        <span className="post-cat">Music</span>
                        <span className="post-cat">Life</span>
                    </div>
                    <Link to={`/posts/${post.id}`}>
                        <span className="post-title">{post.title}</span>
                    </Link>
                    <hr />
                    <span className="post-date">1 hour ago</span>
                </div>
                <p className="post-description">{post.body}</p>
            </div>
        );
    });

    return <div>{renderPosts}</div>;
};

export default Post;
