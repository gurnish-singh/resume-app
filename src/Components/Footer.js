import React from "react";

function Footer(props) {
        if (!props.resumeData) return null;
        const networks = props.resumeData.map(function (network) {
            return (
                <li key={network.name}>
                    <a href={network.url}>
                        <i className={network.className}></i>
                    </a>
                </li>
            );
        });
        return (
            <footer>
                <div className="row">
                        <div className="twelve columns">
                            <ul className="social-links">{networks}</ul>

                            <ul className="copyright">
                                <li>&copy; Copyright 2023 Gurnish Singh</li>
                                <li>
                                    Design by{" "}
                                    <a title="Styleshout" href="https://www.linkedin.com/in/gurnish-singh/">
                                        Gurnish Singh
                                    </a>
                                </li>
                            </ul>
                        </div>

                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#about">
                            <i className="icon-up-open"></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
}

export default Footer;
