import axios from "axios"
import Types from "prop-types"


export const UserList = ({ users, onDelete, onUp }) => {

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:3004/Users/${id}`)
            .then(res => {
                onDelete(id);
            });
    }

    return <div>
        <h1>User List</h1>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>salary</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(elm => <tr key={elm.id} style={{ background: elm.salary > 800000 ? "green" : "rgba(0, 0, 0, 0.1)" }}>
                        <td>{elm.id}</td>
                        <td>{elm.name}</td>
                        <td>{elm.surname}</td>
                        <td>{elm.salary}</td>
                        <td>
                            <button onClick={() => handleDelete(elm.id)}>x</button>
                            <button onClick={() => onUp(elm.id)}>+</button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div >
}

UserList.propTypes = {
    users: Types.arrayOf(Types.exact({
        id: Types.string,
        name: Types.string,
        salary: Types.number,
        surname: Types.string
    })),
    onDelete: Types.func,
    onUp: Types.func
}