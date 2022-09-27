import React from 'react';
import Home from "./pages/Home/Home";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions/TermsConditions";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="terms"  element={<TermsConditions/>}/>
                <Route path="privacy"  element={<PrivacyPolicy/>}/>
            </Routes>
        </Router>
    );
};


export default App;