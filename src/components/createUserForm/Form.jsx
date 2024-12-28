import {useForm} from "react-hook-form";


export function Form() {
    const {
        reset,
        handleSubmit,
        register,
    } = useForm({
        initialValues: {
            name: "",
            username: "",
            email: "",
        }
    });


    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8000/users', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            reset()
            alert("User successfully created!")
        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    }

    return (
        <div style={{ width: 800, margin: "0 auto" }}>
            <form
                style={{ width: 400, paddingTop: 100, display: "flex", flexDirection: "column", gap: 20,  margin: "0 auto" }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <input type="text" {...register("name")}  placeholder="Name" required />
                <input type="email" {...register("email")}  placeholder="Emal  " required />
                <input type="text"  {...register("username")} placeholder="Username" required />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}