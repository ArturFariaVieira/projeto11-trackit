import Styled from "styled-components";
import { Link } from "react-router-dom";
import { Constantes } from "../constants/constantes"
import { useState, useEffect, useContext } from "react";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Contexts/Profilecontext"
import { CircularProgressbar } from 'react-circular-progressbar';
export default function Footer() {
    const {porcentagem} = useContext(LoginContext)
    const Navigate = useNavigate;
    return (
        <Caixafooter>
            <Link to= "/habitos">
            <Caixahabitos>
                <h1> Hábitos </h1>
            </Caixahabitos>
            </Link>
            <Link to= "/hoje">
            <Caixahoje>
                <h1> Hoje </h1>
            </Caixahoje>
            </Link>
            <Link to= "/historico">
            <Caixahistorico>
                <h1> Histórico </h1>

            </Caixahistorico>
            </Link>



        </Caixafooter>

    )
}

const Caixafooter = Styled.div`
height: 70px;
width: 375px;
position: fixed;
bottom: 0;
display:flex;
background-color: #FFFFFF;
a{
    text-decoration: none;
}


`
const Caixahabitos = Styled.div`
height: 70px;
width: 187.5px;
display:flex;
position: relative;

h1{
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    display:flex;
    position: absolute;
    top:22px;
    left:36px;


    color: #52B6FF;

}`
const Caixahistorico = Styled.div`
height: 70px;
width: 187.5px;
display:flex;
position: relative;
h1{
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400
    font-size: 18px;
    text-decoration: none;
    text-align: center;
    display:flex;
    text-decoration: none;
    color: #52B6FF;
    position: absolute;
    top:22px;
    right:36px;


}`
const Caixahoje=Styled.div`
height: 91px;
width: 91px;
border-radius: 50px;
background-color: #52B6FF;
position: absolute;
bottom: 10px;
left: 142.5px;
z-index: 1;
display:flex;
justify-content: center;
align-items: center;
h1{
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400
    font-size: 18px;
    text-decoration: none;
    text-align: center;   
    text-decoration: none;
    color: #FFFFFF;
}
`
