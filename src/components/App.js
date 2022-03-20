import InitialScreen from './InitialScreen';
import Deck from './Decks';
import{useState} from 'react';
import Footer from './Footer';


export default function App() {
    const [stateInitialScreen, setState] = useState(false);

    return (
    <>
        <InitialScreen state ={stateInitialScreen} setState={setState}/>
        <Deck state={stateInitialScreen}/>
        <Footer state={stateInitialScreen}/>
    </>
    )
}
