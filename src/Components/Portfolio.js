import React from "react";
let id = 0;

function Portfolio(props) {
    if (!props.resumeData) return null;
    const projects = props.resumeData.projects.map(function (projects) {
        // let projectImage = "../assets/images/to-do-list.png"
        return (
            <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                    <img alt={projects.title} src={require("../assets/images/to-do-list.png")}/>
                    <div style={{textAlign: "center"}}>{projects.title}</div>
                </div>
            </div>
        );
    });

    return (
        <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        <div
                            id="portfolio-wrapper"
                            className="bgrid-quarters s-bgrid-thirds cf"
                        >
                            {projects}
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Portfolio;
