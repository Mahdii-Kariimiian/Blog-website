import "./topbar.css";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Topbar = () => {
    return (
        <div className="top">
            <div className="top-left">
                <FaFacebook className="top-icon" />
                <FaTwitter className="top-icon" />
                <FaInstagram className="top-icon" />
                <FaPinterest className="top-icon" />
            </div>
            <div className="top-center">
                <ul className="top-list">
                    <NavLink to="write" className="top-list-item">
                        <li>Write</li>
                    </NavLink>
                    <NavLink to="/">
                        <li className="top-list-item">Home</li>
                    </NavLink>
                    <NavLink to="about">
                        <li className="top-list-item">About</li>
                    </NavLink>
                    <NavLink to="contact">
                        <li className="top-list-item">Contact</li>
                    </NavLink>
                    <NavLink to="login">
                        <li className="top-list-item">LOGOUT</li>
                    </NavLink>
                </ul>
            </div>
            <div className="top-right">
                <NavLink to='settings'>
                    <img
                        className="avatar"
                        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/002a3a48fdc5068e5b54139d478c5d5967d48d23_full.jpg"
                        alt="Avatar"
                    />
                </NavLink>
                <div className="top-search">
                    <FaSearch className="search-icon" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
