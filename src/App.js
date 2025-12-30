import './App.css';
import React, {Fragment} from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import resumeData from './assets/resumeData.json';
import Education from "./components/Education";
import Skills from "./components/Skills"
import Experience from "./components/Experience";
import BlogPage from "./components/bloging/BlogPage";
import RedirectBanner from "./components/./RedirectBanner";

function App() {
    return (
        <Fragment>
            <RedirectBanner target="https://gurnish-singh.vercel.app/" delay={5} />
            <Header resumeData={resumeData.main}/>
            <About resumeData={resumeData.main}/>
            <section id="resume">
                <Education resumeData={resumeData.resume}/>
                <Skills resumeData={resumeData.resume}/>
                <Experience resumeData={resumeData.resume}/>
            </section>
            <BlogPage/>
            <Contact resumeData={resumeData.main}/>
            <Footer resumeData={resumeData.main.social}/>
        </Fragment>
    );
}

export default App;
