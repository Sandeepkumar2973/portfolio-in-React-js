import React from "react";
import "./App.css";
import Exprience from "./component/Exprience";
import Intro from "./component/intro/Intro";
import Navbar from "./component/Navbar";
import Portfolio from "./component/portfolio/Portfolio";
import Services from "./component/services/Services";
import Work from "./component/Work/Work";
const App=()=>{
    return(<>
        <div className="App">
            <Navbar/>
            <Intro/>
            <Services/>
            <Exprience/>
            <Work/>
            <Portfolio/>
        </div>
        </>
    );
}
export default App;