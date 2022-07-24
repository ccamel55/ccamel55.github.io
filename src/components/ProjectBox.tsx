import React from 'react';

export default function ProjectBox(props:any) {
    return (
        <div className="ProjectBox" style={{
            position: "relative",
            width: "350px",
            height: "150px",
            backgroundColor: "#292929",

            boxSizing: "border-box",
            padding: "10px",
            borderRadius: "10px"
        }}>
            {props.children}
        </div>
    );
};