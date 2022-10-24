import Styled from "styled-components";
import Checkmark from "../assets/check.png"

export default function Habitoshoje({ id, name, funcao, sequence, highestsequence, done  } ) {

console.log(funcao)

    return(
        <Caixahabito>
            <Caixatexto>
                <h1>{name} </h1>
                <h2> Sequência atual {sequence}</h2>
                <h2> Maior sequencia {highestsequence}</h2>

            </Caixatexto>
            
            <Check done={done} onClick={() => funcao(id, done) }><img src={Checkmark}/> </Check>
        </Caixahabito>
    )
}

const Check = Styled.div`
position: absolute;
height: 69px;
width: 69px;
right: 5px;
top: 10px;
background-color: ${(props) => props.done? '#8FC549' : '#E7E7E7'};
display:flex;
align-items: center;
justify-content:center;
border-radius: 5px;
img{
    height: 28px;
    width: 35px;
    color:white;
    background-color: ${(props) => props.done? '#8FC549' : '#E7E7E7'} ;
    fill: white;
    border-radius: 5px;
}

}`
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
h2{
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #666666;
    margin-top: 5px;
}
`
const Caixabotoes= Styled.div`
height: 35px;
width: 288px;
margin-right: 3px;
margin-top: 3px;

`
