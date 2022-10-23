import Styled from "styled-components";
import Logo from "../assets/Logo.jpg"
import { useContext, useState, useEffect } from "react";
import { LoginContext } from "../Contexts/Profilecontext"
import axios from "axios";
import Loadingdiv from "../components/loading"
import { Constantes } from "../constants/constantes"
import { Link, useNavigate } from "react-router-dom";



export default function Login( ) {
    
    const { setEmail, setSenha, email, senha, loading, setLoading, setImage } = useContext(LoginContext)
    const {URLlogin} = Constantes;
    const Navigate = useNavigate();

    

    function Fazerlogin(e) {
        e.preventDefault();
        setLoading(true);          
        let body = {
            email: email,
            password: senha
        };            
        let promise= axios.post(URLlogin, body);
        promise.then((res) => {
            setImage(res.data.image)
            console.log(res.data)
            Navigate("/hoje");
        })
            
        }
        
    
    return (

        <Pagina>
            <Caixalogo>
                <img src={Logo} />
            </Caixalogo>
            <Caixaformulario>
                <form  onSubmit={Fazerlogin}>
                    <label htmlFor="email" ></label>
                    <input 
                        disabled={loading}
                        id="email"
                        placeholder="email"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                        type="email"
                        required
                    />
                    <label htmlFor="senha" ></label>
                    <input 
                        disabled={loading}
                        id="senha"
                        placeholder="senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        type="password"
                        required
                    />
                    
                    <button type= "submit" disabled={loading} > {loading ? <Loadingdiv botao = {2}/> : "Entrar"} </button>
                    
                </form>
            </Caixaformulario>
            <Link to = "/cadastro">
            <Caixalink>
                <h1> Não tem uma conta? Cadastre-se!</h1>
            </Caixalink>
            </Link>
        </Pagina>

    )
}

const Pagina = Styled.div`
height: 667px;
width: 375px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Caixalogo = Styled.div`
height: 180px;
width: 180px;
margin-bottom: 30px;
img {
    height: 180px;
    width: 180px;
}`

const Caixaformulario = Styled.div`
height: 170px;
width: 375px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

form{
    width: 375px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
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
    }
    button{

    width: 303px;
    height: 45px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 21px;
    font-weight: 400;
    line-height: 26px;
    background-color: #52B6FF; 
    color: #FFFFFF;
    margin-bottom: 25px;
    text-align: center;
    border-radius: 5px;

    }
    }
    
    
}
`
const Caixalink = Styled.div`
height: 17px;
width: 300px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1{
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #52B6FF;
}
`

