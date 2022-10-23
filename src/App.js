import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect, } from "react"
import Styled from "styled-components"
import { ResetCss } from "./resetcss"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import { LoginContext } from "./Contexts/Profilecontext"
import Hoje from "./pages/Hoje"
import Historico from "./pages/Historico"
import Habitos from "./pages/Habitos"

export default function App() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const [key, setKey] = useState("");
    const [image, setImage] = useState("");
    const [porcentagem, setPorcentagem] = useState("");
    const [nome, setNome] = useState("");
    



    

    return (
        <BrowserRouter>
        <ResetCss/>
            <LoginContext.Provider value = {{email , setEmail, senha, setSenha, loading, setLoading, key, setKey, setImage, image}}>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/hoje" element={<Hoje />}/>
                <Route path="/historico" element={<Historico />}/>
                <Route path="/habitos" element={<Habitos />}/>


            </Routes>
            </LoginContext.Provider>  

        
        
        </BrowserRouter>
        
    )

}

const Layoutpagina = Styled.div`
height: 667px;
width: 375px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Button = Styled.button`
height: 45px;
width: 303px;
font-family: 'Lexend Deca', sans-serif;
font-size: 21px;
color:#FFFFFF;
background-color: #52B6FF;
display:${(props) => props.visible? "none" : ""};

`


