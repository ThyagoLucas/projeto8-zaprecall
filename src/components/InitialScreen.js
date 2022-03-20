function InitialScreen(props) {
    const { state, setState } = props;
  
    const stateInitialScreen = `start ${!state ? "disabled" : ""}`;
  
    return (
      <>
        <div className={stateInitialScreen}>
          <img src="/img/logo.png" alt="Imagem de um raio" />
          <h1>Zap Recall</h1>
          <button onClick={()=> setState(false)}>Iniciar Recall!</button>
        </div>
      </>
    );
  }
  
  export default InitialScreen;
  