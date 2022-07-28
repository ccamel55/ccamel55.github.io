import headerIMG from '../../resources/imgs/header.jpg';
import IconLabel from '../common/IconLabel';

import locationIcon from '../../resources/icons/place.svg';
import emailIcon from '../../resources/icons/email.svg';
import codeIcon from '../../resources/icons/code.svg';

export default function MobileHeader() {
    return(
        <div style={{
            width: "100%",
            height: "100vh",
            position: "relative",
        }}>
            <img src={headerIMG} alt="Header Background" style={{
                filter: "brightness(85%)",
                objectFit: "cover",
                width: "100%",
                height: "100%"
            }}/>

            <div style={{
                position: "absolute",
     
                left: "0",
                top: "0",

                width: "100%",
                height: "100%",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <h1>Allan Ma</h1>
                <h2>Student</h2>

                <br/>

                <IconLabel icon={locationIcon} label="Auckland, New Zealand" />
                <IconLabel icon={emailIcon} label="allanma31@gmail.com" href="mailto:allanma31@gmail.com" />
                <IconLabel icon={codeIcon} label="ccamel55" href="https://github.com/ccamel55" />
            </div>
        </div>
    );
};