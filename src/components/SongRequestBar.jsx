import React, { useState } from "react";

const SongRequestBar = () => {
    const [songName, setSongName] = useState("");

    const handleSend = () => {
        if (!songName.trim()) return;

        const email = "selvin.ug.20.ee@francisxavier.ac.in"; // 👉 replace with your email address
        const subject = "Song Request 🎵";
        const body = `Hi! I want to request this song: ${songName}`;
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailtoUrl, "_blank"); // opens user's default mail app
        setSongName("");
    };

    return (
        <div className="w-full bg-[#121212] flex items-center justify-between px-4 py-3 border-t border-gray-700">
            <input
                type="text"
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
                placeholder="Type a song name to request..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-2"
            />
            <button
                onClick={handleSend}
                className="bg-green-500 hover:bg-green-400 text-white px-4 py-1.5 rounded-xl transition"
            >
                Send
            </button>
        </div>
    );
};

export default SongRequestBar;
