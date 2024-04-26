import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Home from "./pages/home/Home";
function App() {
    return (
        <>
            <Topbar />
            <Single />
            {/* <Home /> */}
        </>
    );
}

export default App;
