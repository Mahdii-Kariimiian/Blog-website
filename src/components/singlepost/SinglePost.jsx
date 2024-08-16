import React from "react";
import "./singlepost.css";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "../../App";

const SinglePost = () => {
    const id = useParams().id;
    const selectedPost = useContext(myContext).find((post) => post.id == id);
    console.log(selectedPost , id)

    return (
        <div className="single-post">
            <div className="single-post-wrapper">
                <img
                    className="single-post-img"
                    src="https://picsum.photos/400/400"
                    alt=""
                />
                <h1 className="single-post-title">
                    {selectedPost.title}
                    <div className="single-post-edit">
                        <RiEdit2Fill className="single-post-icon" />
                    </div>
                    <div className="single-post-delete">
                        <MdDelete className="single-post-icon" />
                    </div>
                </h1>
                <div className="single-post-info">
                    <span className="single-post-author">
                        Author: <b>Mahdi Karimian</b>
                    </span>
                    <span className="single-post-date">
                        Date: <b>11/11/2024</b>
                    </span>
                </div>
                <p className="single-post-description">
                    {selectedPost.body}
                </p>
            </div>
        </div>
    );
};

export default SinglePost;
