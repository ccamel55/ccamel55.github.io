import headerIMG from '../../resources/imgs/header.jpg';
import IconLabel from '../common/IconLabel';

import locationIcon from '../../resources/icons/place.svg';
import emailIcon from '../../resources/icons/email.svg';
import codeIcon from '../../resources/icons/code.svg';

export default function DekstopHeader() {
    return(
        <div style={{
            position: "relative",
            width: "20%",
            height: "100vh",
            minWidth: "350px"
        }}>
            <img src={headerIMG} alt="Header Background" style={{
                filter: "brightness(85%)",
                objectFit: "cover",
                width: "100%",
                height: "100%",
            }}/>

            <div style={{
                position: "absolute",
                top: "15%",
                left: "50px",
            }}>
                <h1>Allan Ma</h1>
                <h2>Student</h2>
            </div>

            <div style={{
                position: "absolute",
                bottom: "15%",
                left: "50px",

                display: "flex",
                flexDirection: "column",
                gap: "10px",
            }}>
                <IconLabel icon={locationIcon} label="Auckland, New Zealand" />
                <IconLabel icon={emailIcon} label="allanma31@gmail.com" href="mailto:allanma31@gmail.com" />
                <IconLabel icon={codeIcon} label="ccamel55" href="https://github.com/ccamel55" />
            </div>
        </div>
    );
};