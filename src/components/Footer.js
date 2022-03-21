import { IconContext } from 'react-icons';
import {AiFillCloseCircle, AiFillQuestionCircle, AiFillCheckCircle} from 'react-icons/ai'

function Footer(props){
    
    const {state, length, icons, cont, haveWrong} = props;

    const stateFooter = `${state ? 'disabled' : '' }`;

    return (cont < length) ? (
    <footer className={stateFooter}>
        <h1>{cont}/{length} concluídos </h1>
        <div className="icons">
        {icons.map(icon =>{
            switch(icon){
                case 1:
                    return (
                        <IconContext.Provider value={{color:'#FF3030', size:'33px'}}>
                            <AiFillCloseCircle/>
                        </IconContext.Provider>
                    );
                    break;
        
                case 2:
                    return (
                        <IconContext.Provider value={{color:'#FF922E', size:'33px'}}>
                            <AiFillQuestionCircle/>
                        </IconContext.Provider>
                    );
                    break;
                case 3:
                    return (
                        <IconContext.Provider value={{color:'#2FBE34', size:'33px'}}>
                            <AiFillCheckCircle/>
                        </IconContext.Provider>
                    );
                    break;
            }
        }
        )}
        </div>
    </footer>
    ): (

        <footer className={stateFooter}>
            <FinishMsg haveWrong={haveWrong} />
            <h1>{cont}/{length} concluídos </h1>
            <div className="icons">
            {icons.map(icon =>{
                switch(icon){
                    case 1:
                        return (
                            <IconContext.Provider value={{color:'#FF3030', size:'33px'}}>
                                <AiFillCloseCircle/>
                            </IconContext.Provider>
                        );
                        break;
            
                    case 2:
                        return (
                            <IconContext.Provider value={{color:'#FF922E', size:'33px'}}>
                                <AiFillQuestionCircle/>
                            </IconContext.Provider>
                        );
                        break;
                    case 3:
                        return (
                            <IconContext.Provider value={{color:'#2FBE34', size:'33px'}}>
                                <AiFillCheckCircle/>
                            </IconContext.Provider>
                        );
                        break;
                }
            }
            )}
            </div>
        </footer>
        
        
    )

}


function FinishMsg({haveWrong}){

    return (haveWrong) ?(

        <div className='finish'>
            <div>
                <img src='/img/sad.png'/>
                <h1>Puutz...</h1>
            </div>
            <h1>Ainda faltam alguns...</h1>
            <h1>Mas não desanime!</h1>
        </div>


    ):(
        <div className='finish'>
            <div>
                <img src='/img/party.png'/>
                <h1>Parabéns</h1>
            </div>
            <h1>Você não esqueceu de nenhum flashcard!</h1>
            
        </div>
    );

}
function Icone(props){
    
   
}



export default Footer;