import React from 'react';

interface BodyComponentProps {
    name: string;
    pageNum: number;
    currentPage: number;
    children: React.ReactNode;
}

export default function BodyComponent(props:BodyComponentProps) {

    if (props.pageNum === props.currentPage){
        return(
            <div style={{
                width: "80%",
                maxWidth: "1100px",
            }}>
                <h2 style={{marginBottom: "10px"}}>{props.name}</h2>
                {props.children}
            </div>
        );
    }
    else {
        return(
            null
        )
    }
};