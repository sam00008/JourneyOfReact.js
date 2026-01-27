
const ColorBar = ({setColor}) => {
    return (
        <>
            <div className="flex flex-wrap gap-3 p-4 bg-gray-100 rounded-lg shadow-md justify-center">

                <span 
                 onClick={() => setColor("red")}
                className="px-4 py-2 rounded-full bg-red-500 text-white cursor-pointer hover:scale-105 transition">
                    Red
                </span>

                <span 
                onClick={() => setColor("#6acb6a")}
                className="px-4 py-2 rounded-full bg-green-500 text-white cursor-pointer hover:scale-105 transition">
                    Green
                </span>

                <span 
                 onClick={() => setColor("blue")}
                className="px-4 py-2 rounded-full bg-blue-500 text-white cursor-pointer hover:scale-105 transition">
                    Blue
                </span>

                <span 
                  onClick={() => setColor("green")}
                className="px-4 py-2 rounded-full bg-lime-600 text-white cursor-pointer hover:scale-105 transition">
                    Olive
                </span>

                <span 
                  onClick={() => setColor("grey")}
                className="px-4 py-2 rounded-full bg-gray-500 text-white cursor-pointer hover:scale-105 transition">
                    Grey
                </span>

                <span 
                onClick={() => setColor("yellow")}
                className="px-4 py-2 rounded-full bg-yellow-400 text-black cursor-pointer hover:scale-105 transition">
                    Yellow
                </span>

                <span 
                  onClick={() => setColor("pink")}
                className="px-4 py-2 rounded-full bg-pink-500 text-white cursor-pointer hover:scale-105 transition">
                    Pink
                </span>

                <span 
                  onClick={() => setColor("purple")}
                className="px-4 py-2 rounded-full bg-purple-500 text-white cursor-pointer hover:scale-105 transition">
                    Purple
                </span>

                <span 
                  onClick={() => setColor("violet")}
                className="px-4 py-2 rounded-full bg-violet-300 text-black cursor-pointer hover:scale-105 transition">
                    Lavender
                </span>

                <span 
                  onClick={() => setColor("white")}
                className="px-4 py-2 rounded-full bg-white border text-black cursor-pointer hover:scale-105 transition">
                    White
                </span>

                <span 
                onClick={() => setColor("black")}
                className="px-4 py-2 rounded-full bg-black text-white cursor-pointer hover:scale-105 transition">
                    Black
                </span>

            </div>
        </>
    );
};

export default ColorBar;