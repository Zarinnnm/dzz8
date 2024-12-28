import {useEffect, useState} from "react";
import {UserInfo} from "../user/UserInfo";


export function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch("http://localhost:8000/users/")
                    .then(res => res.json())
                    .then(data => setUsers(data));
            } catch (e) {
                alert(`Error: ${e.message}`);
            }
        }

        getUsers();
    }, [])

    const removeUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/users/${id}`, {
                method: "DELETE",
            })
            alert("User successfully deleted!")
        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    }

    return (
        <div style={{ width: 800, margin: "0 auto" }}>
            <h1>User List:</h1>
            <div>
                {users?.map((user, i) => (
                    <UserInfo index={i} data={user} handleClick={removeUser} />
                ))}
            </div>
        </div>
    )
}