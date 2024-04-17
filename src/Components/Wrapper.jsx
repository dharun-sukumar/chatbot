import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Hero from "./Hero";

function Wrapper() {
    return (
        <div className="flex h-[100vh] p-8 bg-[#e7e7e7]">
            <Navbar />
            <Sidebar />
            <Hero />
        </div>
    );
}

export default Wrapper;