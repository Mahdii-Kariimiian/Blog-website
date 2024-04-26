import React from "react";
import "./singlepost.css";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const SinglePost = () => {
    return (
        <div className="single-post">
            <div className="single-post-wrapper">
                <img className="single-post-img" src="https://picsum.photos/400/400" alt="" />
                <h1 className="single-post-title">
                    Lorem ipsum dolor fugit.
                    <div className="single-post-edit">
                        <RiEdit2Fill className="single-post-icon" />
                    </div>
                    <div className="single-post-delete">
                        <MdDelete className="single-post-icon" />
                    </div>
                </h1>
                <div className="single-post-info">
                    <span className="single-post-author">Author: <b>Mahdi Karimian</b></span>
                    <span className="single-post-date">Date: <b>11/11/2024</b></span>
                </div>
                <p className="single-post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi id ratione accusamus? Ducimus, deleniti incidunt itaque, tempore quas, eius harum sunt esse molestias deserunt totam alias natus? Veritatis, placeat pariatur?</p>
            </div>
        </div>
    );
};

export default SinglePost;
