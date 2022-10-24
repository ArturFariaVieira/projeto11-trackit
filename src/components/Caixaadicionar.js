import Styled from "styled-components";
import { Constantes } from "../constants/constantes"
import { useState, useEffect, useContext } from "react";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";
import Vector from "../assets/Vector.svg"

export default function Caixaadicionar({nome, setNome, adicionando, setadicionando, funcao} ) {
    const [dias, setDias] = useState([])
    const [loading, setLoading] = useState(false)

    function handleday(id, e){
        console.log(dias)
        if(dias.includes(id)){
            const novoarray = dias.filter((dias) => dias !== id)
            setDias(novoarray)
            console.log("rodou")
            console.log(dias)

        }
        if(dias.includes(id)=== false){
            const novoarray= [...dias];
            novoarray.push(id)
            setDias(novoarray);
            console.log("rodou")

        }

    }

    return(
        <Caixadiv>
            <Caixatexto>
                <input  disabled = {loading}                       
                        id="nome"
                        placeholder="nome do hábito"
                        value={nome}
                        onChange={ e => setNome(e.target.value)}
                        type="text"
                        required
                />
            </Caixatexto>
            <Caixabotoes>
                <Button onClick={(e) => handleday(0, e)} id = {0} dias = {dias} > D </Button>
                <Button onClick={(e) => handleday(1, e)} id = {1} dias = {dias}> S </Button>
                <Button onClick={(e) => handleday(2, e)} id = {2} dias = {dias}> T </Button>
                <Button onClick={(e) => handleday(3, e)} id = {3} dias = {dias}> Q </Button>
                <Button onClick={(e) => handleday(4, e)} id = {4} dias = {dias}> Q </Button>
                <Button onClick={(e) => handleday(5, e)} id = {5} dias = {dias}> S </Button>
                <Button onClick={(e) => handleday(6, e)} id = {6} dias = {dias}> S </Button>

            </Caixabotoes>
            <Cancelar onClick={() =>setadicionando(!adicionando)}> Cancelar </Cancelar>
            <Salvar onClick ={() => funcao(dias) }> Salvar</Salvar>

        </Caixadiv>
    )
}

const Cancelar = Styled.div`
position: absolute;
height: 35px;
width: 84px;
right: 120px;
bottom: 15px;
background-color:#FFFFFF;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #52B6FF;
display: flex;
text-align:center;
align-items:center;
justify-content: center;
border-radius: 8px;`
const Salvar = Styled.div`
position: absolute;
height: 35px;
width: 84px;
right: 16px;
bottom: 15px;
background-color:#52B6FF;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
display: flex;
text-align:center;
align-items:center;
justify-content: center;
border-radius: 8px;
`
const Caixadiv=Styled.div`
height: 200px;
width: 340px;
margin-bottom: 10px;
display: flex;
flex-direction: column;
position: relative;
padding: 10px;
box-sizing: border-box;
background-color: #FFFFFF;
border-radius: 5px;
`
const Caixatexto = Styled.div`
heigh: 25px;
width: 208px;
h1{
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-top: 5px;
}
input{
    width: 303px;
    height: 45px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: black;
    border: solid 1px #D5D5D5;
    margin-bottom: 6px;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 11px;
};
`
const Caixabotoes= Styled.div`
height: 35px;
width: 288px;
margin-right: 3px;
margin-top: 3px;
`
const Button = Styled.button`
height:30px;
width: 30px;
margin-right: 5px;
border-radius: 6px;
border: 1px solid #CFCFCF;
background-color:${(props) => props.dias.includes(props.id)? '#CFCFCF' : '#FFFFFF'};
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${(props) => props.dias.includes(props.id)? '#FFFFFF' : '#DBDBDB'};
}
`