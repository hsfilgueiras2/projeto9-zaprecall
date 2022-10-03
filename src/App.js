
import { GlobalStyle } from "./GlobalStyle";
import logo from "./assets/img/logo.png";
import { useState } from "react";
import styled from "styled-components";

export default function App(){
    const [cartaSelecionada, setCartaSelecionada] = useState(0);
    const [nAcertadas, setNAcertadas] = useState(0);
    const [deckDeTeste,
    setDeckDeTeste] = useState([
        {
            pergunta:"O q eh JSX?",
            resposta:"Uma extensao da lingaugem JavaScript",
            status:"hidden",
            color:"#333333"
        },
        {
            pergunta:"O react eh",
            resposta:"Uma biblioteca JavaScript para construção de interfaces",
            status:"hidden",
            color:"#333333"
        },
        {
            pergunta:"Componentes devem iniciar com __",
            resposta:"Letra maiúscula",
            status:"hidden",
            color:"#333333"
        },
        {
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta:"expressões",
            status:"hidden",
            color:"#333333"
        },
        {
            pergunta:"O ReactDOM nos ajuda __",
            resposta: "interagindo com a DOM para colocar componentes React na mesma",
            status:"hidden",
            color:"#333333"
        }
    ])
    function checkStatus(e,ind){
        console.log(deckDeTeste)
        if (e.status == "question"){
            return(e.pergunta)
        }
        else if (e.status == "answered"){
            return(e.resposta)
        }
        else{
            return "Pergunta " + (ind+1)
        }
    }
    function changeStatus(e,ind){
        console.log(deckDeTeste)
        const arrayTemp = [...deckDeTeste]
        if (e.status == "hidden"){
            arrayTemp[ind].status = "question"
            setDeckDeTeste(...[arrayTemp])
        }
        else if (e.status == "question"){
            arrayTemp[ind].status = "answered"
            setDeckDeTeste(...[arrayTemp])
        }
        else{
            
        }
    }
    function checkClass(e){
        if (e.status == "hidden"){
            return "pergunta-fechada"
        }
        else{
            return "pergunta-aberta"
        }
    }
    function paintRed(){
        const arrayTemp = [...deckDeTeste];
        arrayTemp[cartaSelecionada].status = "hidden"
        arrayTemp[cartaSelecionada].color = "#FF3030"
        setDeckDeTeste(...[arrayTemp])
        if (nAcertadas<deckDeTeste.length)setNAcertadas(nAcertadas+1);
    }
    function paintOrange(){
        const arrayTemp = [...deckDeTeste];
        arrayTemp[cartaSelecionada].status = "hidden"
        arrayTemp[cartaSelecionada].color = "#FF922E"
        setDeckDeTeste(...[arrayTemp])
        if (nAcertadas<deckDeTeste.length)setNAcertadas(nAcertadas+1);    }
    function paintGreen(){
        const arrayTemp = [...deckDeTeste];
        arrayTemp[cartaSelecionada].status = "hidden"
        arrayTemp[cartaSelecionada].color = "#2FBE34"
        setDeckDeTeste(...[arrayTemp])
        if (nAcertadas<deckDeTeste.length)setNAcertadas(nAcertadas+1);    }
    function iconChoose(color){
        
        if (color == "#333333"){
            return "play-outline"
        }
        else if (color == "#FF3030"){
            return "close-circle"
        }
        else if (color == "#FF922E"){
            return "help-circle"
        }
        else if (color == "#2FBE34"){
            return "checkmark-circle"
        }
    }
    return(
        <>
        <GlobalStyle/>
        <div className="screen-container">
            <div className="logo-container">
                <img src={logo}></img>
                <h1>ZapRecall</h1>    
            </div>
            {deckDeTeste.map((item,index) => <CaixaPergunta data-identifier="flashcard" currentStatus={item.status} currentColor={item.color} onClick={()=>{changeStatus(item,index); setCartaSelecionada(index)}}  key={index}>
                <p>{checkStatus(item,index)}</p> <ion-icon name={()=>{iconChoose(item.color); console.log(iconChoose(item.color))}}></ion-icon>
                </CaixaPergunta> )}
                <div className="footer-concluidos">
                    <div className="container-botoes">
                        <button onClick={()=>paintRed()  } data-identifier="forgot-btn">Não lembrei</button>
                        <button onClick={()=>paintOrange()} data-identifier="almost-forgot-btn">Quase não lembrei</button>
                        <button onClick={()=>paintGreen()} data-identifier="zap-btn">Zap!</button>
                        
                    </div>
                    <div data-identifier="flashcard-counter">{nAcertadas + "/" + deckDeTeste.length + " CONCLUIDOS"}</div>
                </div>
        </div>
        </>
    )
}

const CaixaPergunta = styled.div`
    ${ (prop)=> prop.currentStatus == "hidden"?
`    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration-color:${prop.currentColor};
    text-decoration:${prop.currentColor != "#333333"? "line-through":""};
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${prop.currentColor};
      

      `
:
`    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${prop.currentColor};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;`
  
}
`
