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
            if (email === "ljalilli@gmail.com" && password === "lc29102009") {
                setLoading(false);
                localStorage.setItem("isAdmin", "true");
                window.location.href = "/admin";
            } else {
                setLoading(false);
                setError("Giriş uğursuz oldu. Yanlış email və ya şifrə.");
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