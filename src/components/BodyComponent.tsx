import React from 'react';

interface BodyComponentProps {
    pageNum: number;
    currentPage: number;
    children: React.ReactNode;
}

export default function BodyComponent(props:BodyComponentProps) {

    if (props.pageNum === props.currentPage){
        return(
            <div className="BodyComponent" style={{
                width: "80%",
                maxWidth: "1100px",
            }}>
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