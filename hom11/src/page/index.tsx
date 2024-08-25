import { useForm } from '../../src/hooks/index';
import { FormValues } from '../api/types';
import "../index.css"

export const Page = () => {

    const { handleSubmit, register, errors } = useForm<FormValues>();

    const handleAdd = (data: FormValues) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleAdd)} className="p-4 bg-light rounded shadow-sm">
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        {...register("name", { required: "Please fill name" })}
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="Enter your name"
                        id="name"
                    />
                    {
                        errors.name && (
                            <div
                                className="invalid-feedback">
                                {errors.name}
                            </div>
                        )
                    }
                </div>

                <div className="form-group mb-3">
                    <label
                        htmlFor="age"
                        className="form-label">
                        Age
                    </label>
                    <input
                        {...register("age", { required: "Please fill age" })}
                        className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                        placeholder="Enter your age"
                        id="age"
                    />
                    {
                        errors.age && (
                            <div
                                className="invalid-feedback">
                                {errors.age}
                            </div>
                        )
                    }
                </div>

                <div className="text-end">
                    <button
                        className="btn btn-success"
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    );
};