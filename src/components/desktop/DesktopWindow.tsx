import DesktopBody from "./DesktopBody";
import DekstopHeader from "./DesktopHeader";

export default function DesktopWindow() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
        }}>
           <DekstopHeader/> 
           <DesktopBody/> 
        </div>
    );
};