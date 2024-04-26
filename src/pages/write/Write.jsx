import React from "react";
import "./write.css";
import { IoIosAddCircle } from "react-icons/io";

const Write = () => {
    return (
        <div className="write">
            <img className="write-img" src="https://picsum.photos/800/400" alt="" />
            <form className="write-form">
                <div className="write-form-group">
                    <label htmlFor="file-input">
                        <IoIosAddCircle className="write-icon" />
                    </label>
                    <input
                        type="file"
                        id="file-input"
                        style={{ display: "none" }}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="write-input"
                        autoFocus={true}
                    />
                </div>
                <div className="write-form-group">
                    <textarea
                        className="write-input write-text"
                        type="text"
                        placeholder="Tell your story"
                    ></textarea>
                </div>
                <button className="write-submit"> Publish</button>
            </form>
        </div>
    );
};

export default Write;
