import React from 'react';

interface IconLabelProps {
    icon: any;
    label: string;
    href?: string;
};

export default function IconLabel(props:IconLabelProps) {
    return (
        <div className="IconLabel" style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
        }} >
            <img src={props.icon} alt="Icon" style={{
                width: "auto",
                height: "auto",
            }}/>
            <h3 style={{ margin: "0px" }}>{ props.href ? <a href={props.href} target="_blank" rel="noreferrer">{props.label}</a> : props.label }</h3>
        </div>
    );
};