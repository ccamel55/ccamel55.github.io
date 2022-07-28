import MobileBody from "./MobileBody";
import MobileHeader from "./MobileHeader";

export default function MobileWindow() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            
            overflowY: "auto",
            height: "100vh",
        }}> 
            <MobileHeader/>
            <MobileBody/>
        </div>
    );
};