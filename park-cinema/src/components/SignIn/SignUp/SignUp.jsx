import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setGender(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
            
        if (!name || !surname || !number || !email || !date || !password || !confirmPassword) {
            setError("Bütün sahələri doldurduğunuzdan əmin olun.");
            return;
        }
    
        if (password !== confirmPassword) {
            setError("Şifrələr uyğun gəlmir.");
            return;
        }
    
        setLoading(true);
        setError("");

        setTimeout(() => {
            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

            const newUser = {
                name,
                surname,
                number,
                email,
                date,
                gender,
                password,
            };
        
            const updatedUsers = [...existingUsers, newUser];
            localStorage.setItem("users", JSON.stringify(updatedUsers));
        
            setLoading(false);
            window.location.href = "/az/sign-in";
        }, 1000);
    };


    return(
        <section className="signUp">
            <div className="container">
                <div className="heading">
                    <h1>Qeydiyyat</h1>
                </div>
                <div className="inputBar">
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <div className="name">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ad"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="surname">
                                <input
                                    type="text"
                                    name="surname"
                                    placeholder="Soyad"
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                />
                            </div>
                            <div className="number">
                                <input
                                    type="text"
                                    name="number"
                                    placeholder="+994 51 511 11 11"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>
                            <div className="email">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Elektron poçt"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="date">
                                <input
                                    type="date"
                                    name="date"
                                    placeholder="Doğum tarixi"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
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
                            </div>
                            <div className="radio">
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="Kişi"
                                    checked={gender === "Kişi"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="male"> Kişi</label>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="Qadın"
                                    checked={gender === "Qadın"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="female"> Qadın</label>
                            </div>
                            <div className="confirmPassword">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Şifrəni Təsdiqlə"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <div className="button">
                            <button type="submit" disabled={loading}>
                                {loading ? "Qeydiyyat edirik..." : "Qeydiyyat"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp