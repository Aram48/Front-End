export const UserList = ({ users }) => {
    return <div>
        <h3>User List</h3>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>login</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(elm => <tr key={elm.id}>
                        <td>{elm.id}</td>
                        <td>{elm.name}</td>
                        <td>{elm.surname}</td>
                        <td>{elm.login}</td>
                        <td>{elm.password}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}
