import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import FirstPage from "./pages/firstpage/FirstPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<FirstPage />} />
                    <Route path="write" element={<Write />} />
                </Route>
                <Route path="settings" element={<Settings />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
