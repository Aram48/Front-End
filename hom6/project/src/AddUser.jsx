import { useState } from "react";

export const AddUser = ({ onAdd, users }) => {

    const regexp = /\S+@\S+\.\S+/;
    const reg = /[0-9]/;

    const [user, setUser] = useState({ id: "", name: "", surname: "", login: "", password: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (!user.id.trim() || !user.name.trim() || !user.surname.trim() || !user.login.trim() || !user.password.trim()) {
            setSuccess("");
            return setError("All fields must be filled");
        }
        if (!regexp.test(user.login)) {
            setSuccess("");
            return setError("The login field must contain a valid email");
        }
        if (!reg.test(user.id)) {
            setSuccess("");
            return setError("Id must be number");
        }
        if (users.some(u => u.login === user.login)) {
            setSuccess("");
            return setError("The email is already in use");
        }
        if (user.password.length < 6) {
            setSuccess("");
            return setError("Password must be at least 6 characters long");
        }
        if (users.some(u => u.id === user.id)) {
            setSuccess("");
            return setError("Id is already in use");
        }

        onAdd(user);
        setUser({ id: "", name: "", surname: "", login: "", password: "" });
        setError("");
        setSuccess("User added successfully!");
        setTimeout(() => setSuccess(""), 3000);

    }

    return (
        <div>
            <h4>Signup</h4>
            <form onSubmit={handleSubmit}>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
                <input
                    type="text"
                    placeholder="id"
                    value={user.id}
                    onChange={e => setUser({ ...user, id: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="name"
                    value={user.name}
                    onChange={e => setUser({ ...user, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="surname"
                    value={user.surname}
                    onChange={e => setUser({ ...user, surname: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="login"
                    value={user.login}
                    onChange={e => setUser({ ...user, login: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={user.password}
                    onChange={e => setUser({ ...user, password: e.target.value })}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}