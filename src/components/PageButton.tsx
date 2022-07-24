import React from 'react';

interface PageButtonProps {
    name: string;
    active: boolean;
    onClick: () => void;
};

export default function PageButton(props:PageButtonProps) {
    return (
        <div className="PageButton">
            <button onClick={props.onClick} style={{
                transition: "color 0.1s ease-in-out",
                color: props.active ? "white" : "#464646",
            }} >{props.name}</button>
        </div>
    );
};