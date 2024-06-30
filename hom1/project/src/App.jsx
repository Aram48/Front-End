import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [users, setUsers] = useState([
    { id: 101, name: "Tiko", salary: 200000 },
    { id: 102, name: "Luso", salary: 400000 },
    { id: 103, name: "Ashot", salary: 500000 },
    { id: 104, name: "Karine", salary: 700000 },
  ]);
  const salaryUp = id => {
    setUsers(
      users.map(elm =>
        elm.id === id ? { ...elm, salary: elm.salary + 50000 } : elm
      )
    );
  }

  const salaryDown = id => {
    setUsers(
      users.map(elm => {
        if (elm.id === id && elm.salary > 50000) {
          return { ...elm, salary: elm.salary - 50000 };
        } else {
          return elm;
        }
      })
    );
  }

  const remove = id => {
    setUsers(
      users.filter(user => user.id != id)
    );
  }

  return <>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>salary</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(elm => <tr key={elm.id}>
            <td>{elm.id}</td>
            <td>{elm.name}</td>
            <td>{elm.salary} AMD</td>
            <td>
              <button onClick={() => salaryUp(elm.id)}>salary up</button>
              <button onClick={() => salaryDown(elm.id)}>salary down</button>
              <button onClick={() => remove(elm.id)}>X</button>
            </td>
          </tr>)
        }
      </tbody>
    </table>
  </>

}

export default App