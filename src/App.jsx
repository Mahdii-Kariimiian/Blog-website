import { useEffect, useState, createContext } from "react";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import FirstPage from "./pages/firstpage/FirstPage";
import Post from "./components/post/Post";
import Posts from "./components/posts/Posts";
import SinglePost from "./components/singlepost/SinglePost";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import api from "./axios/axios";

export const myContext = createContext();

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                api("/posts").then((res) => setPosts(res.data));
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchPost();
    }, []);

    return (
        <myContext.Provider value={posts}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<FirstPage />} />
                        <Route path="write" element={<Write />} />
                        <Route path="posts" element={<Posts />} />
                        <Route path="posts/:id" element={<SinglePost />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </myContext.Provider>
    );
}

export default App;
