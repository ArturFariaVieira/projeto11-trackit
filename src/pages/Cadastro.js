import Styled from "styled-components";
import Logo from "../assets/Logo.jpg"
import { Link } from "react-router-dom";
import { Constantes } from "../constants/constantes"
import { useState, useEffect } from "react";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");
    const [nome, setNome] = useState("");
    const Navigate = useNavigate();


    function Fazercadastro(e){
        e.preventDefault();
        setLoading(true);
        const {URLcadastro}  = Constantes;
        let body ={ 
            email: email,
            name: nome,
            image: image,
            password: senha
        }
        let promise= axios.post(URLcadastro, body);
        promise.then((res) => {
            console.log(res.data)
            alert("Cadastro feito com sucesso! Faça Login!")
            Navigate("/");
        })
    }

    return (

        <Pagina>
            <Caixalogo>
                <img src={Logo} />
            </Caixalogo>
            <Caixaformulario>
                <form onSubmit={Fazercadastro}>
                    <label htmlFor="email" ></label>
                    <input
                        id="email"
                        placeholder="email"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                        type="email"
                        required
                    />
                    <label htmlFor="senha" ></label>
                    <input
                        id="senha"
                        placeholder="senha"
                        value={senha}
                        onChange={ e => setSenha(e.target.value)}
                        type="password"
                        required
                    />
                    <label htmlFor="nome" ></label>
                    <input
                        id="nome"
                        placeholder="nome"
                        value={nome}
                        onChange={ e => setNome(e.target.value)}
                        type="text"
                        required
                    />
                    <label htmlFor="foto" ></label>
                    <input
                        id="foto"
                        placeholder="foto"
                        value={image}
                        onChange={ e => setImage(e.target.value)}
                        type="text"
                        required
                    />
                    <button type="submit" > Cadastrar </button>
                </form>
            </Caixaformulario>
            <Link to ="/">
            <Caixalink>
                <h1> Já tem uma conta? Faça Login!</h1>
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
height: 250px;
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
    button {
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