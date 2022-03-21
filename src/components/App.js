import InitialScreen from './InitialScreen';
import Deck from './Decks';
import{useState, useEffect} from 'react';
import Footer from './Footer';
import { decks } from './Decks';

function comparador() { 
    return Math.random() - 0.5; 
}

export default function App() {
    const [stateInitialScreen, setState] = useState(false);
    const [sizeDeck, setSize] = useState(decks[0].cards.length);
    const [icons, setIcons] = useState([]);
    const [cont, setCont] = useState(0);
    const [haveWrong, setHaveWrong] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(()=> {
        const sortedCards = [...decks][0].cards.sort(comparador);
        setCards(sortedCards);
    }, [] );

    return (
    <>
        <InitialScreen state ={stateInitialScreen} setState={setState}/>
        <Deck state={stateInitialScreen} setIcons={setIcons} setCont={setCont} cards={cards} cont={cont} icons={icons} setHaveWrong={setHaveWrong}/>
        <Footer state={stateInitialScreen}  length={sizeDeck} icons={icons} cont={cont} haveWrong={haveWrong}/>
    </>
    )
}
