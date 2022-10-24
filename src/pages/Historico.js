import Header from "../components/Header"
import Footer from "../components/Footer"
import Styled from "styled-components";
import { useContext } from "react";
import { LoginContext } from "../Contexts/Profilecontext"

export default function Historico() {

    const { image, key, } = useContext(LoginContext)


    return (
        <>
        <Header/>
        <Caixatexto>
            <h1> Histórico </h1>
            <h2> Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </Caixatexto>
        <Footer/>
       
        </>
    )
}
const Caixatexto= Styled.div`
height:300px;
width: 375px;
h1{
    margin-top: 28px;
    margin-left: 17px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    font-weight: 400;

}
h2{
    margin-top: 17px;
    margin-left: 17px;
    width: 340px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    line-height: 23px;
    color: #666666;
    font-weight: 400;

}`