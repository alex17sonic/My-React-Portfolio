import { useEffect, useState } from "react";

export const LoadingScreen = ({onComplete}) => {
    const [textArea, setTextArea] = useState("");
    const fullText = "Alexandru Sonic";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTextArea(fullText.substring(0,index));
            index ++;

            if (index > fullText.length) {
                clearInterval(interval)
                
                setTimeout(() => {
                    onComplete();
                }, 500)
            }
        }, 80);
        return () => clearInterval(interval); 
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center"> 
           <div className="mb-4 text-4xl font-mono font-bold">
                {textArea}<span className="animate-flash ml-1"> | </span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-x-hidden">
                <div className="w-[40%] h-full bg-blue-900 shadow-[0_0_15px_#3b82f6] animate-loading-bar">

                </div>
            </div>
        </div>
    );
};

