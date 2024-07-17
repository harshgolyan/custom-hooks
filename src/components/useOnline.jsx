import React, { useEffect, useState } from "react";

const useOnline = () => {
    const [status, setStatus] = useState(window.navigator.onLine);

    useEffect(() => {
        const statusHandler = () => {
            setStatus(window.navigator.onLine)
        }
        window.addEventListener("online",statusHandler)

        window.addEventListener("offline",statusHandler)

        return () => {
            window.removeEventListener("online",statusHandler)

            window.removeEventListener("offline",statusHandler)
        }

    }, [])
    return status;
}

export default useOnline;