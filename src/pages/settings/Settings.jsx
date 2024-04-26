import React from "react";
import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaUser } from "react-icons/fa";

const Settings = () => {
    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="settings-title">
                    <span className="settings-update-title">
                        Update your Account
                    </span>
                    <span className="settings-delete-title">
                        Delete Account
                    </span>
                </div>
                <form className="settings-form">
                    <label>Profile Picture</label>
                    <div className="settings-profile-picture">
                        <img
                            src="https://picsum.photos/400/400"
                            alt="profile-picture"
                        />
                        <label htmlFor="file-input">
                            <FaUser className="settings-profile-picture-icon" />
                        </label>
                        <input
                            type="file"
                            id="file-input"
                            style={{ display: "none" }}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Username" />
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settings-submit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
};

export default Settings;
