import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import UrlContext from "../../contexts/UrlContext";
import TokenContext from "../../contexts/TokenContext";

import styled from "styled-components";

export default function Header({ username }){
    const { url } = useContext(UrlContext);
    const { token, setToken } = useContext(TokenContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        if(!window.confirm(`Deseja realmente sair de sua conta?`)){return <></>}
        setToken(null);
        navigate("/");
    }

    return(

        <Container className={username ? `logged` : ``}>
                { username
                    ? <h2 className="logged">Seja bem-vindo(a), {username}</h2>
                    : <></>
                }
                <NavBar>
                    <Link to="/">
                        <h2>Home</h2>
                    </Link>
                    <Link to="/ranking">
                        <h2>Ranking</h2>
                    </Link>
                    <h2 onClick={handleSignOut}>Sair</h2>
                </NavBar>
        </Container>
    )
}

const Container = styled.header`
    display:flex;
    align-items:center;
    width: 100vw;
    heigth: 30px;
    padding: 60px 20px 20px 20px;
    margin: 0px auto;
    justify-content:flex-end;
    h2{
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #9C9C9C;
    } h2.logged{
        color: #5D9040;
    }
    &.logged{
        justify-content:space-between;
    }
`
const NavBar =  styled.nav`
    display:flex;
    align-items:center;
    & a {
        text-decoration:none;
        margin-right: 27px;
    }
`