// arquivos de estilo do componente

import MyComponent from "./MyComponent";


const FirstComponent = () => {
    //essa função funciona...
    return (
        <div>
            {/* Algum comentário */}
            <h1>Meu Primeiro Componente!</h1>
            <MyComponent></MyComponent>
        </div>
    );
}

export default FirstComponent;