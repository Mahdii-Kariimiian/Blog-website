import React from "react";
import "./sidebar.css";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-title">ABOUT ME</span>
                <img
                    className="sidebar-img"
                    src="../../public/mahdi Karimian image.jpg"
                    alt="author image "
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam illo sit voluptatibus quidem vel fuga suscipit
                    temporibus consequuntur optio consectetur,
                </p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">CATEGORIES</span>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">Life</li>
                    <li className="sidebar-list-item">Music</li>
                    <li className="sidebar-list-item">Work</li>
                    <li className="sidebar-list-item">Tech</li>
                    <li className="sidebar-list-item">Cinema</li>
                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">FOLLOW ME</span>
                <div className="sidebar-social">
                    <FaFacebook className="sidebar-icon" />
                    <FaTwitter className="sidebar-icon" />
                    <FaInstagram className="sidebar-icon" />
                    <FaPinterest className="sidebar-icon" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
