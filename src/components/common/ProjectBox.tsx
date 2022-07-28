import React from 'react';

interface ProjectBoxProps {
    name: string;
    href: string;
    children: React.ReactNode;
}

export default function ProjectBox(props:ProjectBoxProps) {
    return (
        <div style={{
            position: "relative",
            width: "350px",
            height: "150px",
            backgroundColor: "#292929",

            boxSizing: "border-box",
            padding: "10px",
            borderRadius: "10px"
        }}>
            <h4 style={{ marginBottom: "10px"}}> 
                <a href={props.href} target="_blank" rel="noreferrer">{props.name}</a> 
            </h4>
            <p style={{ color: "#BBBBBB"  }}>
                {props.children}
            </p>
        </div>
    );
};