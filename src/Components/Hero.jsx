import React, {useState} from "react";
import dp from "../assets/Aashiqui_2.jpg"
import { FiSend } from "react-icons/fi";

function Hero() {

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        setMessages([...messages, message]);
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "tinyllama",
                prompt: message
            })
        });
    
        const text = await response.text();
        const data = text.split('\n').filter(Boolean).map(JSON.parse);
    
        const res = data.forEach(item => console.log(item.response));
        setMessages([...messages, res]);
        setMessage('');
    }

    return(
        <div className="flex flex-col justify-between w-[100%] h-[100%] ml-2 ">
            <div className="flex items-center justify-between h-[10vh] w-[100%] rounded-2xl bg-slate-50">
                <div className="flex ml-4 gap-2">
                    <img src={dp} alt="dp" className="h-14 w-14 rounded-full" />
                    <div className="flex flex-col justify-center">
                        <div>My Girfriend 💙</div>
                        <div className="text-xs text-slate-400">Online</div>
                    </div>
                </div>

                <div className="mr-4">
                    <button className="border p-3 pl-6 pr-6 rounded-full border-slate-950">Profile</button>
                </div>
            </div>
        <div className="flex items-end flex-col-reverse h-[80%] rounded-2xl bg-slate-50 pr-2">
            {messages.map((msg, index) => <div key={index}>{msg}</div>)}
        </div>
        <div className="flex h-[8%] rounded-2xl items-center justify-between">
            <div className="bg-white w-[96%] h-[100%] p-2 rounded-2xl">
                <input type="text" name="" id="" placeholder="Write Messages..." className="w-[100%] h-[100%]" onChange={(e) => setMessage(e.target.value)}/>
            </div>
            <div className="bg-orange-500 h-[100%] w-[5%] rounded-xl flex items-center justify-center ml-2 cursor-pointer" onClick={sendMessage}><FiSend style={{width: "30px", height: "30px"}}/></div>
        </div>
    </div>
    )
}

export default Hero;