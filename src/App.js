import {useState} from "react";

import {UserList} from "./components/userList/UserList";
import {Form} from "./components/createUserForm/Form";

function App() {
    const [pageType, setPageType] = useState("list");


  return (
    <div className="App">
        <header style={{ width: 800, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 0", borderBottom: "1px solid lightgray" }}>
            <div onClick={() => setPageType("list")} style={{ fontSize: "30px", fontWeight: 700, cursor: "pointer" }}>
                Logo
            </div>
            <nav>
                <button style={{ marginRight: 20 }} onClick={() => setPageType("list")}>Home</button>
                <button onClick={() => setPageType("createUser")}>Create New User</button>
            </nav>
        </header>
        {pageType === "list" ? <UserList /> : <Form />}
    </div>
  );
}

export default App;
