import React from 'react';

import PageButton from './PageButton';
import BodyComponent from './BodyComponent';
import ProjectBox from './ProjectBox';

export default function Body() {

    const [page, setPage] = React.useState(0);

    return(
        <div className="Body" style={{
            width: "100%",
        }}>
            <div className="Body-buttons" style={{
                position: "absolute",
                right: "50px",
                top: "50px",

                display: "flex",
                flexDirection: "row",
                gap: "20px",
            }}>
                <PageButton name="About" active={page === 0} onClick={() => {setPage(0)}}/>
                <PageButton name="Projects" active={page === 1} onClick={() => {setPage(1)}}/>
            </div>

            <div className="Body-Content" style={{
                boxSizing: "border-box",
                paddingLeft: "50px",
                paddingRight: "50px",
                paddingTop: "15vh",
                paddingBottom: "15vh",

                display: "flex",
                flexDirection: "column",

                overflowY: "auto",
                width: "100%",
                height: "100vh",
                alignItems: "center",
                gap: "50px",
            }}>
                <BodyComponent pageNum={0} currentPage={page}>

                    <h2>About</h2>
                    <p>
                        Hi ! <br/><br/>  
                        Im Allan, a computer science student studying at the University of Auckland. I am currently looking for a SWE internship or part-time job anywhere in New Zealand or Australia.
                        If you think I would be a valuable resource to your team, please contact me.
                    </p>

                </BodyComponent>

                <BodyComponent pageNum={1} currentPage={page}>

                    <h2>Projects</h2>
                    <div className="ProjectsList" style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "20px",
                    }}>
                        <ProjectBox>
                            <h4 style={{ margin: "0px", marginBottom: "10px"}}> 
                                <a href="https://github.com/ccamel55/ccamel55.github.io" target="_blank" rel="noreferrer">ccamel55.github.io</a> 
                            </h4>

                            <p style={{ margin: "0px", color: "#BBBBBB"  }}>
                                Source code to this website. Built with React. Written in TypeScript. <br/>
                            </p>
                        </ProjectBox>

                        <ProjectBox>
                            <h4 style={{ margin: "0px", marginBottom: "10px"}}> 
                                <a href="https://github.com/ccamel55/d3d-2D-Rendering-class" target="_blank" rel="noreferrer">d3d-2D-Rendering-class (unfinished)</a> 
                            </h4>

                            <p style={{ margin: "0px", color: "#BBBBBB"  }}>
                                Batch render class for drawing 2d objects. Uses the Direct-X API. Written in C++. <br/>
                            </p>
                        </ProjectBox>

                        <ProjectBox>
                            <h4 style={{ margin: "0px", marginBottom: "10px"}}> 
                                <a href="https://github.com/ccamel55/wndProc-Input-Handler" target="_blank" rel="noreferrer">wndProc-Input-Handler</a> 
                            </h4>

                            <p style={{ margin: "0px", color: "#BBBBBB" }}>
                                Simple input handler for Windows. Uses the Windows API. Written in C++.
                            </p>
                        </ProjectBox>

                        <ProjectBox>
                            <h4 style={{ margin: "0px", marginBottom: "10px"}}> 
                                <a href="https://github.com/ccamel55/textGUI" target="_blank" rel="noreferrer">textGUI</a> 
                            </h4>

                            <p style={{ margin: "0px", color: "#BBBBBB"  }}>
                                Simple text GUI. Requires user to have a functional render and input library. Written in C++.
                            </p>
                        </ProjectBox>
                    </div>

                </BodyComponent>
            </div>
        </div>
    );
};