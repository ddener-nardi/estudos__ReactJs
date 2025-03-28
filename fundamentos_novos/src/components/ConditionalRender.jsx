import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false); 

    const [name] = useState("Dener");
    return (
        <div>
            <h1>Será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            { name === "João" ? (
                <div>
                    <p>O nome é João</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
        </div>
    )
}


export default ConditionalRender;