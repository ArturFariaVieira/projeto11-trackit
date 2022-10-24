import Styled from "styled-components";
import Vector from "../assets/Vector.svg"

export default function Habitoshabitos({ id, name, days, funcao } ) {

console.log(funcao)

    return(
        <Caixahabito>
            <Caixatexto>
                <h1>{name} </h1>
            </Caixatexto>
            <Caixabotoes>
                <Button id = {0} dias = {days} disabled> D </Button>
                <Button id = {1} dias = {days} disabled> S </Button>
                <Button id = {2} dias = {days} disabled> T </Button>
                <Button id = {3} dias = {days} disabled> Q </Button>
                <Button id = {4} dias = {days} disabled> Q </Button>
                <Button id = {5} dias = {days} disabled> S </Button>
                <Button id = {6} dias = {days} disabled> S </Button>

            </Caixabotoes>
            <Deletar onClick={() => funcao(id) }> <img src={Vector}/></Deletar>
        </Caixahabito>
    )
}

const Deletar = Styled.div`
position: absolute;
height: 15px;
width: 15px;
right: 5px;
top: 10px;`
const Caixahabito=Styled.div`
height: 91px;
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
width: 340px;


h1{
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-top: 5px;
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