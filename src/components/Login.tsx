import { FormEvent, useState } from "react";
import client from "../utils/client";
import Cookies from "js-cookie";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function login(username: string, password: string) {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        client.post("/token/", formData)
            .then(response => {
                Cookies.set("jwt_token", response.data.access_token)
            })
            .catch(err => {
                console.log(err);
            })
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        login(username, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Username:</label>
                <input className="input" type="text" onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className="field">
                <label className="label">Password:</label>
                <input className="input" type="password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="control">
                <button className="button is-primary">Login</button>
            </div>
        </form>
    )
}

export default Login;
