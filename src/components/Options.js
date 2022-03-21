function Options(props){
    const {setIcons, icons, cont, setCont, setHaveWrong} = props.rest;
    const {setVira, setIcon} = props;
    
    return(
        <div className="show"> 
            <div className="options">
                <h1 className="naolembrei" onClick={()=>refresh(1)}>Não lembrei</h1>
                <h1 className="quase" onClick={()=>refresh(2)}>Quase não lembrei</h1>
                <h1 className="zap"onClick={()=>refresh(3)}>Zap!</h1>
            </div>
        </div>
    );
    function refresh(value){
        setCont(cont+1);
        setIcons([...icons, value]);
        setVira(false);
        setIcon(value);

        if(value===1){
            setHaveWrong(true);
        }
    }
}

export default Options;