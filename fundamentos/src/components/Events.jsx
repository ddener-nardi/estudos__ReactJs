const Events = () => {
    const handleMyEvent = (events) => {

        let grey = events.target.value
        window.alert(grey)
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderiza isso!</h1>
        } else {
            return <h1>Renderiza aquilo!</h1>
        }
    }
    return (
        <>
            <div>
                <button onClick={handleMyEvent}> Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => alert("Bravo!!")}>Clique aqui também!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </>
    )
}

export default Events;