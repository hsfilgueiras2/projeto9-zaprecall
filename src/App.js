
import { GlobalStyle } from "./GlobalStyle";
import logo from "./assets/img/logo.png";

export default function App(){
    const deckDeTeste = [
        {
            pergunta:"O q eh JSX?",
            resposta:"Uma extensao da lingaugem JavaScript"
        },
        {
            pergunta:"O react eh",
            resposta:"Uma biblioteca JavaScript para construção de interfaces"
        },
        {
            pergunta:"Componentes devem iniciar com __",
            resposta:"Letra maiúscula"
        },
        {
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta:"expressões",
        },
        {
            pergunta:"O ReactDOM nos ajuda __",
            resposta: "interagindo com a DOM para colocar componentes React na mesma"
        }
    ]
    function checkStatus(e){
        if (e.status == "question"){
            return(e.pergunta)
        }
        else if (e.status == "answered"){
            return(e.resposta)
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
            {deckDeTeste.map((item,index) => <div  className="pergunta-fechada" key={index}>{() => item.status = "hidden"? "pergunta "+(index+1):checkStatus(item)}</div> )}
            <div className="footer-concluidos">
                    <div className="container-botoes">
                        <button>Não lembrei</button>
                        <button>Quase não lembrei</button>
                        <button>Zap!</button>

                    </div>
                </div>
        </div>
        </>
    )
}