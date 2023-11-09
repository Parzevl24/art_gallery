import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "../components/Signin.jsx";
import Signup from "../components/Signup.jsx";
import Data from "../components/Data.jsx";
import Arts from '../components/Arts.jsx';
import Appbar from "../components/Appbar.jsx";
import { useEffect, useState } from 'react';
import axios from "axios";
import MyArt from '../components/MyArt.jsx';


function App() {

    return (
        <div style={{width: "100vw",
            height: "100vh",
            backgroundColor: "#eeeeee"}}
        >
                <Router>
                    <Appbar />
                    <Routes>
                        <Route path={"/signin"} element={<Signin />} />
                        <Route path={"/signup"} element={<Signup />} />
                        {/* <Route path={"/data"} element={<Data />} /> */}
                        <Route path={"/arts"} element={<Arts />} />
                        <Route path={"/myarts"} element={<MyArt />} />
                    </Routes>
                </Router>

        </div>
    );
}

export default App;