import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserList } from "./UserList"
import { AddUser } from './AddUser';

function App() {

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  const handleAdd = obj => {
    setUsers([...users, { ...obj, id: obj.id }]);
  }

  return <>
    {message && <p style={{ color: "green" }}>{message}</p>}
    <UserList
      users={users}
    />
    <AddUser
      onAdd={handleAdd}
      users={users}
    />
  </>
}

export default App