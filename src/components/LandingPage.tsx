import React from 'react';

import Header from './Header';
import Body from './Body';


export default function LandingPage () {
    return (
        <div className="LandingPage" style={{
            display: "flex",
            flexDirection: "row",
        }}>
            <Header/>
            <Body/>
        </div>  
    );
};  