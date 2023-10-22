import { FormEvent, useState } from "react";
import client from "../utils/client";


function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [memberRole, setMemberRole] = useState("Member");

    function register(username: string, role: string, password: string) {
        console.log(username, role, password);
        // todo: register
    }

    function handleRegister(e: FormEvent) {
        e.preventDefault();
        if (password != passwordConfirm) {
            return;
        }
        register(username, memberRole, password);
    }

    return (
        <form onSubmit={handleRegister}>
            <div className="field">
                <label className="label">Username:</label>
                <input className="input" type="text" onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="field">
                <label className="label">Member Role:</label>
                <div className="select">
                    <select onChange={e => setMemberRole(e.target.value)}>
                        <option>Member</option>
                        <option>Manager</option>
                    </select>
                </div>
            </div>
            <div className="field">
                <label className="label">Password:</label>
                <input className="input" type="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="field">
                <label className="label">Confirm Password:</label>
                <input className="input" type="password" onChange={e => setPasswordConfirm(e.target.value)} />
            </div>
            <div className="control">
                <button className="button is-primary">Create New Member</button>
            </div>
        </form>
    )
}

export default Register;
