import './Container.scss'

const Container = ( {children} ) => {

return (
    <div className="my-container">
        <h3>Componente Container</h3>
        {children}
    </div>
)


}

export default Container