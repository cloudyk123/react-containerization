import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./views/Login";
import Notfoundpage from "./views/Notfoundpage";
import Home from "./views/Home";
import Timeline from "./views/Timeline";

function Path() {
    return (
    <Router>
        <Routes>
            <Route path="/react-containerization/" element={<Home/>}/>
            <Route path="/react-containerization/login/" element={<Login/>}/>
            <Route path="*" element={<Notfoundpage/>}/>
            <Route path={"/react-containerization/timeline/"} element={<Timeline/>}/>
        </Routes>
    </Router>
)
}

export default Path;