import React from 'react';
import IconLabel from './IconLabel';

import headerIMG from '../resources/imgs/header.jpg';

import locationIcon from '../resources/icons/place.svg';
import emailIcon from '../resources/icons/email.svg';
import codeIcon from '../resources/icons/code.svg';

export default function Header() {
    return (
        <header className="Header" style={{
            width: "20%",
            height: "100vh",
            minWidth: "350px",
            backgroundColor: "lightblue",
        }}>
            <img src={headerIMG} alt="Header Background" style={{
                filter: "brightness(85%)",
                objectFit: "cover",
                width: "100%",
                height: "100%",
            }}/>

            <div className ="Header-title" style={{
                position: "absolute",
                top: "15%",
                left: "50px",
            }}>
                <h1 style={{ marginBottom: "0" }} >Allan Ma</h1>
                <h2 style={{ marginTop: "0" }}>Student</h2>
            </div>

            <div className ="Header-footer" style={{
                position: "absolute",
                bottom: "15%",
                left: "50px",
            }}>
                <IconLabel icon={locationIcon} label={"Auckland, New Zealand"} />
                <IconLabel icon={emailIcon} label={"allanma31@gmai.com"} />
                <IconLabel icon={codeIcon} label={"ccamel55"} />
            </div>

        </header>
    );
};