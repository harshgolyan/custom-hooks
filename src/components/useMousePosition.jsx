import React, { useEffect, useState } from "react";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        
        const mouseMoveHandler = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove",mouseMoveHandler)

        return () => {
            window.removeEventListener("mousemove",mouseMoveHandler)
        }

    },[])
    return mousePosition;
}

export default useMousePosition;