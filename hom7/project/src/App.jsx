import { useState, useEffect } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [users, setUsers] = useState([]);

  const addItem = obj => setUsers([...users, obj]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/Users")
      .then(res => {
        setUsers(res.data);
      });
  }, []);

  const handleDelete = id => {
    setUsers(users.filter(user => user.id !== id));
    toast.success(`User deleted successfully`);
  }

  const salaryUp = id => {
    const user = users.find(user => user.id === id);
    const updateSalary = +user.salary + 50000;
    const updateUser = { ...user, salary: updateSalary };

    axios
      .patch(`http://localhost:3004/Users/${id}`, updateUser)
      .then(res => {
        setUsers(users.map(user =>
          user.id === id ? { ...user, salary: updateSalary } : user
        ));
        toast.success(`Salary updated for user ${user.name}`);
      });
  }


  return (
    <div className='row'>
      <AddUser
        onAdd={addItem}
      />
      <UserList
        users={users}
        onDelete={handleDelete}
        onUp={salaryUp}
      />
      <ToastContainer />
    </div>
  )
}

export default App
