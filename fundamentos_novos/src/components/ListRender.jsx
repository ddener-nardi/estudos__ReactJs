import { useState } from "react";

const ListRender = () => {
    const [list] = useState(['Dener', 'Dindinha', 'Chlamba']);

    const [users, setUsers] = useState([{
        id: 1,
        name: "Matheus",
        age: 31,
    },
    {
        id: 2,
        name: "João",
        age: 25,
    }

])
const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber!== user.id)
    })
}
return (
        <div>
            <ul>
                {list.map((item, key) => (
                    <li key={key}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete</button>
        </div>
    )
}


export default ListRender;