import { useState } from "react";
import { IconContext, icons } from "react-icons";
import {FiPlay} from 'react-icons/fi'
import Options from "./Options";
import {AiFillCloseCircle, AiFillQuestionCircle, AiFillCheckCircle} from 'react-icons/ai'

export const decks = [{
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
    
    const {state, setSizeDeck, cards, ...rest} = props;
    
    const stateOfMain = `main ${(state) ? 'disabled':''}`

    return (
        <main className={stateOfMain}>
            <div className="topDeck">
                <img src="/img/logo.png" alt="Um Raio, logo do aplicativo"/>
                <h1 className="App name"> Zap Recall</h1>
            </div>
            <div className="questions">
                {cards.map((card, index) =>{
                return <Card key = {index} cont={index} info = {card} rest={rest}/>
                
                })}
            </div>
            
        </main>              
    );
}

function Card(props){
    const {question, response} = props.info;
    const{rest, cont} = props;
    
    const [virado, setVira] = useState(false);
    const [showResponse, setStateResponse] = useState(false);
    const [icon, setIcon] = useState(0);

    if(!virado){

        if(icon == 0){
            const state = `card ${(virado) ? 'virado': ''}`;
            return(
                <div className={state} onClick={() => setVira(true)}>
                    <Content content={`Pergunta ${cont + 1}`}/>
                    <Icon name={FiPlay} color={'#333333'} size={'25px'}/>
                </div>
        );
        }else{
            const state = `card tachinha${icon}`;
            switch (icon){
                case 1:
                    return(
                    <div className={state} onClick={() => setVira(true)}>
                        <Content content={`Pergunta ${cont + 1}`}/>
                        <Icon name={AiFillCloseCircle} color={'#FF3030'} size={'33px'}/>
                    </div>
                    );break;
                case 2: 
                    return(
                        <div className={state} onClick={() => setVira(true)}>
                            <Content content={`Pergunta ${cont + 1}`}/>
                            <Icon name={AiFillQuestionCircle} color={'#FF922E'} size={'33px'}/>
                        </div>
                    );break;
                case 3:
                    return(
                        <div className={state} onClick={() => setVira(true)}>
                            <Content content={`Pergunta ${cont + 1}`}/>
                            <Icon name={AiFillCheckCircle} color={'#2FBE34'} size={'33px'}/>
                        </div>
                    );break;
            }  
        }
        
    }

    else{
        const state = `card ${(virado) ? 'virado': ''}`;
        return (!showResponse) ? (
            <div className={state} onClick={() => setStateResponse(true)}>
               <Content content={question}/>
                <div className="seta" >
                    <img src="/img/setinha.png"/>
                </div>
            </div>
        ):(
            <div className={state} >
                <div className="show"> 
                    <Content content={response}/>
                    <Options rest={rest} setVira={setVira} setIcon={setIcon} />
                </div>
            </div>
        );
    }

}

function Content({content}){

    return(
        <h1>{content}</h1>
    );
}

function Icon ({name, color, size}){

    const IconCompenent = name;
    
    return(
        
        <IconContext.Provider value={{color:color, size:size}}>
            <IconCompenent />
        </IconContext.Provider>
        
    );

}





export default Deck;