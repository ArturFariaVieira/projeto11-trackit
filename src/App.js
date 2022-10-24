import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
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
    const [porcentagem, setPorcentagem] = useState(10);
    



    

    return (
        <BrowserRouter>
        <ResetCss/>
            <LoginContext.Provider value = {{porcentagem, setPorcentagem, email , setEmail, senha, setSenha, loading, setLoading, key, setKey, setImage, image}}>
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





