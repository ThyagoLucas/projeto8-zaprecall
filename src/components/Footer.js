
function Footer(props){
    const {state} = props;

    const stateFooter = `${state ? 'disabled' : 'teste' }`;

    return (
    <footer className={stateFooter}>
        <h1>0/4 concluídos </h1>
        <div className="icons">

        </div>
    </footer>
    );
}



export default Footer;