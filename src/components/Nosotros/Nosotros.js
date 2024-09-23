import "./Nosotros.scss"

export const Nosotros = () => {
    const estilo = { color: "green", height: "5px" }
    const hr = { color: "brown", height: "0px", paddingBottom: "20px", border: "none", borderTop: "20px solid brown" }

    return (
        <section>
            <div className="nosotros">
                <h2 >ABOUT</h2>
            </div>
            <hr style={hr} />
            <p style={estilo}>Course</p>
        </section>
    )


}