import "./Nosotros.scss"

/* export const Nosotros = (props) => { */

export const Nosotros = ( {titulo="Título por defecto", content="Contenido por defecto"} ) => {
    /* console.log(props); */

   /*  const {titulo, content} = props */ // Desestructuro las variables titulo y content de las props
    
    const estilo = { fontSize: "40px", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto"}
    const hr = { color: "black", height: "0px", paddingBottom: "10px", margin: "1% 10%", border: "none", borderTop: "20px solid brown" }

    return (
        <section>
            <div className="nosotros">
                {/* <h2>{props.titulo}</h2>
                <h3>{props.content}</h3> */}
                <h2>{titulo}</h2>
                <h3>{content}</h3>
            </div>
            <hr style={hr} />
            <p style={estilo}>Course</p>
        </section>
    )


}