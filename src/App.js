import './App.css';
import React, {Fragment} from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import resumeData from './assets/resumeData.json';
function App() {
    return (
        <Fragment>
            <Header resumeData={resumeData.main}/>
            <About resumeData={resumeData.main}/>
            <Resume resumeData={resumeData.resume}/>
            <Contact resumeData={resumeData.main}/>
            <Footer resumeData={resumeData.main.social}/>
        </Fragment>
    );
}

export default App;
