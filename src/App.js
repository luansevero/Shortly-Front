import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TokenContext from "./contexts/TokenContext.js";
import UrlContext from "./contexts/UrlContext.js";

import HomePage from "./pages/HomePage.js";
import RankingPage from "./pages/RankingPage.js";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";

export default function App() {
    const [token, setToken] = useState(null);
    const [url, setUrl] = useState('https://shortyl-16th.herokuapp.com');

    return (
        <TokenContext.Provider value={{setToken, token}}>
            <UrlContext.Provider value={{ url, setUrl }}>
                <BrowserRouter>
                    <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/ranking" element={<RankingPage />} />
                    </Routes>
                </BrowserRouter>
            </UrlContext.Provider>
        </TokenContext.Provider>
        
    )
}