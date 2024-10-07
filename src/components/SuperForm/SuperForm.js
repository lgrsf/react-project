export const SuperForm = (props) => {

    const estilo = { fontSize: "40px", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto"}

    return <>
        <h1 style={estilo}>{props.title}</h1>
        {props.render({buttonText:"SuperForm button"})}
    </>
}

