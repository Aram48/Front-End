import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().min(3, "Name must be at least 3 characters long").required("Name is required"),
    surname: yup.string().required("Surname is required"),
    salary: yup.number().typeError("Salary must be a number").required("Salary is required"),
});

export const AddUser = ({ onAdd }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitHandler = (data) => {
        axios
            .post("http://localhost:3004/Users", data)
            .then(res => {
                onAdd(res.data);
                reset();
            });
    }

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <label>Name</label>
                <input
                    {...register("name")}
                    type="name"
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

                <label>Surname</label>
                <input
                    {...register("surname")}
                    type="surname"
                />
                {errors.surname && <p style={{ color: "red" }}>{errors.surname.message}</p>}

                <label>Salary</label>
                <input
                    {...register("salary")}
                    type="salary"
                />
                {errors.salary && <p style={{ color: "red" }}>{errors.salary.message}</p>}

                <button type="submit">Save</button>
            </form>
        </div>
    );
}

