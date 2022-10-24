import Header from "../components/Header"
import Footer from "../components/Footer"
import Styled from "styled-components";
import { Constantes } from "../constants/constantes";
import { useState, useEffect, useContext } from "react";
import  axios  from "axios";
import dayjs from "dayjs";
import { LoginContext } from "../Contexts/Profilecontext"
import Habitoshoje from "../components/Habitoshoje";
import Loadingdiv from "../components/loading";


export default function Hoje() {
    const { key, porcentagem, setPorcentagem} = useContext(LoginContext);
    const { URLhoje} = Constantes;
    const [habitoshoje, setHabitoshoje] = useState([])
    const [reload, setReload] = useState(false)
    var customParseFormat = require('dayjs/plugin/customParseFormat');
    dayjs.extend(customParseFormat);
    const [today, setToday] = useState(dayjs().locale('pt-br').format('dddd, DD/MM'));
    let contador = 0;
    let config = {
        headers: { Authorization: `Bearer ${key}` }
        };  
    
    let funcao = function Handlecheck(id, done){
        console.log(config)
        let URLcheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
        let URLuncheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
              
        if(done === false){
        let promise = axios.post(URLcheck,{}, config);
        promise.then( (res) => { 
            console.log(res);
            setReload(!reload)
        })}
        if(done!== false){
        let promise = axios.post(URLuncheck,{}, config);
        promise.then( () => { 
            console.log('uncheckei')
            setReload(!reload)
        })

        }
    }
    useEffect(() => {
        

        const promise = axios.get(URLhoje, config);
        promise.then((res) => {
            console.log(res.data)
            setHabitoshoje(res.data)
            let habitostotais = res.data.length;
            console.log(habitostotais)
            res.data.forEach((habito) => habito.done? contador = contador+1 : "" )
            setPorcentagem((contador/habitostotais).toFixed(2))
            
        })

    }, [reload])


    return (
        <Pagina>
        <Header/>
        <Caixaday porcentagem = {porcentagem}>
            <h1> {today} </h1>
            <h2> {porcentagem===0? "Nenhum hábito concluido ainda" : (porcentagem*100+ "% dos hábitos concluídos") }</h2>
        </Caixaday>
        <Caixahabitos>
            {habitoshoje.length ===0? <Loadingdiv botao={3}/> :habitoshoje.map((habito) => <Habitoshoje funcao = {funcao} id = {habito.id} name = {habito.name} done = {habito.done} sequence = {habito.currentSequence} highestsequence = {habito.highestSequence}/> )}

        </Caixahabitos>

        <Footer/>
       
        </Pagina>
    )
}

const Pagina = Styled.div`
height: 667px;
width: 375px;
background-color: #E5E5E5;
`;
const Caixaday = Styled.div`
height: 60px;
width: 375px;
padding: 17px;
box-sizing: border-box;
h1{
    font-family: 'Lexend Deca', sans-serif;
    weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
}
h2{
    font-family: 'Lexend Deca', sans-serif;
    weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: ${(props)=> props.porcentagem >0? 'green': '#BABABA' }

}
`
const Caixahabitos = Styled.div`
height: 500px;
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