import { useState, useEffect, useContext} from "react";
import axios from "axios";

import UrlContext from "../contexts/UrlContext.js";
import Header from "../components/shared/PageHeaders.js";
import Input from "../components/shared/Inputs.js";

import styled from "styled-components";

export default function HomePage(){
    
    const { url } = useContext(UrlContext);

    // useEffect(() => {
    // }, []);

    return(
        <>
                <Header />
                <Input />
        </>

    )
}
