import { useState } from "react";

const ManageData = () => {
    const [data, setData] = useState(10);

    const handleClick = () => {
        setData(data + 1);
    }

    return (
        <div>
            <p>Valor: {data}</p>
            <button onClick={handleClick}>Trocar</button>
        </div>
    )
}


export default ManageData;