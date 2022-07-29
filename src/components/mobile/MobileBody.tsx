import BodyComponent from "../common/BodyComponent";
import ProjectBox from "../common/ProjectBox";

export default function MobileBody() {
    return(
        <div style={{
            boxSizing: "border-box",
            padding: "20px",
            paddingTop: "15vh",
            paddingBottom: "15vh",

            display: "flex",
            flexDirection: "column",

            width: "100%",
            alignItems: "center",
            gap: "50px",
        }}>
            <BodyComponent name="About" pageNum={0} currentPage={0}>

                <p>
                    Hi ! <br/>
                    Im Allan, a computer science student studying at the University of Auckland. I am currently looking for a SWE internship or part-time job anywhere in New Zealand or Australia.
                    If you think I would be a valuable resource to your team, please contact me.
                </p>

            </BodyComponent>

            <BodyComponent name="Projects" pageNum={1} currentPage={1}>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                }}>
                    <ProjectBox name="ccamel55.github.io" href="https://github.com/ccamel55/ccamel55.github.io">
                        <p>
                            Source code to this website. Built with React. Written in TypeScript. <br/>
                        </p>
                    </ProjectBox>

                    <ProjectBox name="d3d-2D-Rendering-class (unfinished)" href="https://github.com/ccamel55/d3d-2D-Rendering-class">
                        <p>
                            Batch render class for drawing 2d objects. Uses the Direct-X API. Written in C++. <br/>
                        </p>
                    </ProjectBox>

                    <ProjectBox name="wndProc-Input-Handler" href="https://github.com/ccamel55/wndProc-Input-Handler">
                        <p>
                            Simple input handler for Windows. Uses the Windows API. Written in C++.
                        </p>
                    </ProjectBox>

                    <ProjectBox name="textGUI" href="https://github.com/ccamel55/textGUI">
                        <p>
                            Simple text GUI. Requires user to have a functional render and input library. Written in C++.
                        </p>
                    </ProjectBox>
                </div>

            </BodyComponent>
        </div>
    )
}