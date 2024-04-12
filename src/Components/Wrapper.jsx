import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Wrapper() {
    return (
        <div className="flex h-[100vh] p-8 bg-slate-200">
            <Navbar />
            <Sidebar />
        </div>
    );
}

export default Wrapper;