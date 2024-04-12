import React from "react";
import { FaPlus } from "react-icons/fa";
import dp from "../assets/Aashiqui_2.jpg"

function Sidebar() {
    return (
        <div className="flex flex-col justify-between w-[30%] h-[100%] ml-2 ">
            <div className="flex items-center justify-evenly h-[10vh] w-[100%] rounded-2xl bg-slate-50">
                <div className="font-semibold text-xl">Chat</div>
                <input className=" border rounded-full p-2 w-[60%]" type="text" name="text" id="text" placeholder="Search..." />
                <div className="rounded-full bg-orange-500 p-4"><FaPlus style={{color: "white"}}/></div>
            </div>
            <div className="flex flex-col h-[88%]    rounded-2xl bg-slate-50">
                <div className=" text-slate-300 text-sm pt-4 pr-4 pl-4">MESSAGES</div>
{/* MESSAGES */}
                    <div className="flex justify-between w-[100%] p-4 hover:shadow-md">
                        <div className="flex gap-2 justify-between">
                            <img src={dp} alt="logo" className="h-12 w-12 rounded-full"/>
                            <div className="flex flex-col">
                                <div className="">My Girfriend 💙</div>
                                <div className=" text-sm text-slate-500">Have a good day, Dharun!</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-evenly">
                            <div className=" text-xs text-slate-500">10:10 PM</div>
                            <div className="rounded-full z-10 mr-1 text-slate-50 text-xs before:bg-orange-500 relative before:content-[''] before:absolute before:z-[-1] before:h-4 before:w-4 before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full">1</div>
                        </div>
                    </div>
                    <hr />  

{/* end of MESSAGES */}
            </div>
        </div>
    );
}

export default Sidebar;