import styled from "styled-components";

export default function Input(){

    return(
        <Inputs/>
    )
}

const Inputs = styled.input`
    width: 100%;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
`