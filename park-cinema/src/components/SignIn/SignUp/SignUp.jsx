import React from "react";
import "./SignUp.css";

const SignUp = () => {
    return(
        <section className="signUp">
            <div className="container">
                <div className="heading">
                    <h1>Qeydiyyat</h1>
                </div>
                <div className="inputBar">
                    <form action="">
                        <div className="inputs">
                            <div className="name">
                                <input type="text" name="name" placeholder="Ad" />
                            </div>
                            <div className="surname">
                                <input type="text" name="surname" placeholder="Soyad" />
                            </div>
                            <div className="number">
                                <input type="text" name="number" placeholder="+994 51 511 11 11" />
                            </div>
                            <div className="email">
                                <input type="email" name="email" placeholder="Elektron poçt" />
                            </div>
                            <div className="date">
                                <input type="date" name="date" placeholder="Elektron poçt" />
                            </div>
                            <div className="password">
                                <input type="password" name="password" placeholder="Şifrə" />
                            </div>
                            <div className="radio">
                                <input type="radio" id='male' name="radio" />
                                <label for="male"> Kişi</label>
                                <input type="radio" id='female' name="radio" />
                                <label for="female"> Qadın</label>
                            </div>
                            <div className="confirmPassword">
                                <input type="password" name="confirmPassword" placeholder="Şifrəni Təsdiqlə" />
                            </div>
                        </div>
                        <div className="button">
                            <button>Qeydiyyat</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp