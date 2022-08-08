import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TokenContext from "./contexts/TokenContext.js";
import UrlContext from "./contexts/UrlContext.js";

export default function App() {
    const [token, setToken] = useState(null);
    const [url, setUrl] = useState('https://shortyl-16th.herokuapp.com');

    return (
        <TokenContext.Provider value={{setToken, token}}>
            <UrlContext.Provider value={{ url, setUrl }}>
                <BrowserRouter>
                    <Routes>
                            <Route path="/" element={<HomePage />} />
                            {/* <Route path="/signin" element={} />
                            <Route path="/signup" element={} />
                            <Route path="/ranking" element={} /> */}
                    </Routes>
                </BrowserRouter>
            </UrlContext.Provider>
        </TokenContext.Provider>
        
    )
}