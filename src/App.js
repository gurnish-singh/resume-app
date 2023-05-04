import './App.css';
import React, {Fragment} from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import resumeData from './assets/resumeData.json';
import Education from "./Components/Education";
import Skills from "./Components/Skills"
import Experience from "./Components/Experience";

function App() {
    return (
        <Fragment>
            <Header resumeData={resumeData.main}/>
            <About resumeData={resumeData.main}/>
            <section id="resume">
                <Education resumeData={resumeData.resume}/>
                <Skills resumeData={resumeData.resume}/>
                <Experience resumeData={resumeData.resume}/>
            </section>
            <Contact resumeData={resumeData.main}/>
            <Footer resumeData={resumeData.main.social}/>
        </Fragment>
    );
}

export default App;
