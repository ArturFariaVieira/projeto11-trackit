import Styled from "styled-components";
import { useContext } from "react";
import { LoginContext } from "../Contexts/Profilecontext"
export default function Header() {

    const { image, key, } = useContext(LoginContext)


    return(
        <Caixaheader>
            <Caixatexto>
                <h1>TrackIt </h1>
            </Caixatexto>
            <Caixaimagem>
                <img src ="https://cdn.shopify.com/s/files/1/0476/9506/9334/products/sombra-_0083_furia.jpg?v=1600106380"/>
            </Caixaimagem>
        </Caixaheader>
    )
}

const Caixaheader=Styled.div`
height: 70px;
width: 375px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
box-sizing: border-box;
background-color: #126BA5;
`
const Caixatexto = Styled.div`
heigh: 50px;
width: 100px;
margin-left: 7px;
h1{
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;
    color: #FFFFFF;
};
`
const Caixaimagem= Styled.div`
height: 50px;
width: 50px;
margin-right: 7px;
img{
    height: 51px;
    width: 51px;
    border-radius: 96px;
}
`