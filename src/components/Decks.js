import { useState } from "react";
import { IconContext } from "react-icons";
import {FiPlay} from 'react-icons/fi'

const decks = [{
    deckName:'react questions',
        cards:[
            {question: 'O que é JSX?',response:'Uma extensão de linguagem do JavaScript'},
            {question: 'O React é...',response:'uma biblioteca JavaScript para construção de interfaces'},
            {question: 'Componentes devem iniciar com ',response:'letra maiúscula'},
            {question: 'Podemos colocar... dentro do JSX',response:'expressões'},
            {question: 'O ReactDOM nos ajuda...',response:'interagindo com a DOM para colocar componentes React na mesma'},
            {question: 'Usamos o npm para...',response:'gerenciar os pacotes necessários e suas dependências'},
            {question: 'Usamos props para...',response:'passar diferentes informações para componentes'},
            {question: 'Usamos estado (state) para...',response:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}
    ]
}

];

function Deck(props){
    const {state} = props;

    const cards = decks[0].cards.sort(comparador);
    const stateOfMain = `main ${(state) ? 'disabled':''}`

    return (
        <>
        <main className={stateOfMain}>
            <div className="topDeck">
                <img src="/img/logo.png" alt="Um Raio, logo do aplicativo"/>
                <h1 className="App name"> Zap Recall</h1>
            </div>
            <div className="questions">
                {cards.map((card, index) =>{
                return <Card key = {index} cont={index} info = {card}/>
                })}
            </div>
            
        </main>        
        </>
    );

    function comparador() { 
        return Math.random() - 0.5; 
    }

}

function Card(props){
    const {question, response} = props.info;

    const [virado, setVira] = useState(false);
    const [showResponse, setStateResponse] = useState(false);


    const state = `card ${(virado === true) ? 'virado': ''}`


    if(!virado){
        return(
            <div className={state} onClick={() => setVira(true)}>
                <h1>Pergunta {props.cont + 1}</h1>
                
                <IconContext.Provider value={{size:'25px'}}>
                        <FiPlay/>
                </IconContext.Provider>
                
            </div>
        );
    }else{
        return (!showResponse) ? (
            <div className={state} onClick={() => setStateResponse(true)}>
                <h1>{question}</h1>
            
                <div className="seta" >
                    <img src="/img/setinha.png"/>
                </div>
            </div>
        ):(
            <div className={state} >
                    <Options response={response} />
            </div>
        );
    }

}

function Options(props){
    
    return(
        <div className="show"> 
            <h1 className="response">{props.response}</h1>
            <div className="options">
                <h1 className="naolembrei">Não lembrei</h1>
                <h1 className="quase">Quase não lembrei</h1>
                <h1 className="zap">Zap!</h1>
            </div>
        </div>
    );
}

export default Deck;