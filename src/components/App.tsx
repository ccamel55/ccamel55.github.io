import React from "react";

import MobileWindow from "./mobile/MobileWindow";
import DesktopWindow from "./desktop/DesktopWindow";

export default function App() {

    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    const updateWindowState = () => {
        setIsMobile(window.innerWidth <= 768);
    }

    // add resize hook
    React.useEffect(() => {

        window.addEventListener('resize', updateWindowState, false);

        return () => {
            window.removeEventListener('resize', updateWindowState, false);
        }
    }, [])

    return(
        <div>
            {isMobile ? <MobileWindow/> : <DesktopWindow/>}
        </div>
    );
};