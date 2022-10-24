import Header from "../components/Header"
import Footer from "../components/Footer"
import Styled from "styled-components";
import { LoginContext } from "../Contexts/Profilecontext";
import { Constantes } from "../constants/constantes"
import { useState, useEffect, useContext } from "react";
import  axios  from "axios";
import Habitoshabitos from "../components/Habitoshabitos"
import Caixaadicionar from "../components/Caixaadicionar";

export default function Habitos() {

    const { key} = useContext(LoginContext);
    const { URLgethabitos, URLdelete} = Constantes;
    const [habitos, setHabitos] = useState("")
    const [reload, setReload] = useState("")
    const [adicionando, setAdicionando] = useState(false)
    const [nomehabito, setNomehabito] = useState("")
    const [loading, setLoading] = useState(false)
    let contador = 0;
    let config = {
        headers: { Authorization: `Bearer ${key}` }
    };
    
    useEffect(() => {

        const promise = axios.get(URLgethabitos, config);
        promise.then((res) => {
            console.log(res.data)
            setHabitos(res.data)
            setReload(false)
            
        })

    }, [])  
    let deletar = function Deletahabito(id){
       let a=  window.confirm("tem certeza que deseja excluir esse hábito?");
       let URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
       let config = {
        headers: { Authorization: `Bearer ${key}` }
        };
       let promise = axios.delete(URL, config)
       promise.then( () => {
        alert("hábito excluído com sucesso")
        let novoarray = habitos.filter((habito) => habito.id !== id)
        setHabitos(novoarray)
        }
       )
           

        
    }
    let adicionar = function Adicionahabito(dias){
        setLoading(true)
        const {URLcriarhabito} = Constantes;
        let config = {
         headers: { Authorization: `Bearer ${key}` }
         };
         let dadoshabito = {
            name : nomehabito,
            days : dias
         }
         console.log(dadoshabito)
        let promise = axios.post(URLcriarhabito, dadoshabito, config)
        promise.then( (res) => {
         alert("hábito criado com sucesso")
        setLoading(false)
         const novoarray = [...habitos];
         novoarray.push(res.data)
         setHabitos(novoarray);
         setAdicionando(!adicionando)
         setNomehabito("")
         
         }
        )
            
 
         
     }

    

    return (
        <Pagina>
        <Header/>
        <Caixatitulo>
            <h1>Meus hábitos</h1>
            <button onClick={() =>setAdicionando(!adicionando)}> + </button>
        </Caixatitulo>
        {adicionando? <Caixaadicionar adicionando = {adicionando} setadicionando={setAdicionando} nome = {nomehabito} setNome = {setNomehabito} funcao = {adicionar}/> : ""}
        <Caixahabitos>
            {habitos.length ===0? "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!" :habitos.map((habito) => <Habitoshabitos id = {habito.id} funcao ={deletar} name = {habito.name} days = {habito.days}/> )}
        </Caixahabitos>
        <Footer/>
       
        </Pagina>
    )
}

const Pagina = Styled.div`
height: 667px;
width: 375px;
background-color: #E5E5E5;
align-items: center;
display: flex;
flex-direction: column;
`;
const Caixatitulo = Styled.div`
height:70px;
width: 375px;
padding: 17px;
box-sizing: border-box;
display:flex;
justify-content: space-between;
align-items: center;
h1{
    font-family: 'Lexend Deca', sans-serif;
    weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
}
button{
    height: 35px;
    width: 40px;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 25px;
    text-align: center;
    border-radius: 6px;
    font-family: 'Lexend Deca', sans-serif;
    weight: 400;
    font-size: 23px;
    line-height: 29px;
} `

const Caixahabitos = Styled.div`
height: 400px;
width: 375px;
display: flex;
overflow-y: scroll;
flex-direction: column;
align-items: center;
text-align: start;
font-family: 'Lexend Deca', sans-serif;
weight: 400;
font-size: 18px;
line-height: 23px;
padding: 17px;
box-sizing: border-box;
`