import { useState, useEffect, useContext} from "react";
import axios from "axios";

import UrlContext from "../contexts/UrlContext.js";

import styled from "styled-components";

export default function SignIn(){
    
    const { url } = useContext(UrlContext);

    // useEffect(() => {
    // }, []);

    return(
        `Hello World(SignIn)`
    )
}
