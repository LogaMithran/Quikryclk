import Home from "./components/Home/index.jsx";
import Profile from "./components/Profile/index.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Router>
    )
}

export default App
