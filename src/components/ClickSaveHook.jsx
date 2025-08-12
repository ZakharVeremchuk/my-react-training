import { useState, useEffect } from "react";

const ClickSaveHook = () => {
    const [clicks, setClicks] = useState(0);

    // init effect 
    useEffect(() => {
        document.title = `You clicked ${clicks} times`;
    })

    return (
        <button onClick={() => setClicks(clicks + 1)}>
            You clicked {clicks} times
        </button>
    )

}

export default ClickSaveHook;