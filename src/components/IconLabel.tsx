import React from 'react';

interface IconLabelProps {
    icon: any;
    label: string;
}

export default function IconLabel(props:IconLabelProps) {
    return (
        <div className="IconLabel" style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
        }} >
            <img src={props.icon} alt={"Icon"} style={{
                width: "auto",
                height: "auto",
            }}/>
            <h3 style={{ margin: "0px" }}>{props.label}</h3>
        </div>
    );
};