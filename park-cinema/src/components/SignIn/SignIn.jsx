import React, { useState } from "react";
import "./SignIn.css"

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Xahiş edirik, email və şifrəni daxil edin.");
            return;
        }

        setLoading(true);
        setError("");

        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem("users")) || [];

            const matchedUser = users.find(user => user.email === email && user.password === password);

            if (matchedUser) {
                setLoading(false);
                localStorage.setItem("currentUser", JSON.stringify(matchedUser));
                window.location.href = "/az/profile";
            } else {
                setLoading(false);
                setError("");
                alert("Giriş uğursuz oldu. Email və ya şifrə yalnışdır.");
            }
        }, 1000);
    }

    return(
        <section className="signIn">
            <div className="container">
                <div className="heading">
                    <h1>Giriş</h1>
                </div>
                <div className="inputBar">
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <div className="email">
                                <input 
                                    type="text" 
                                    name="email" 
                                    value={email} 
                                    placeholder="Elektron poçt" 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="password">
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Şifrə" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <a href="/az/reset-password">Şifrəni unutmusunuz?</a>
                            </div>
                            {error && <p className="error">{error}</p>}
                        </div>
                        <div className="button">
                            <button type="submit" disabled={loading}>
                                {loading ? "Giriş edirik..." : "Giriş"}
                            </button>
                        </div>
                        <p>Burada yenisiniz?   <a href="/az/sign-up">Qeydiyyat</a></p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn