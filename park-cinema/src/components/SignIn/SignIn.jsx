import React from "react";
import "./SignIn.css"

const SignIn = () => {
    return(
        <section className="signIn">
            <div className="container">
                <div className="heading">
                    <h1>Giriş</h1>
                </div>
                <div className="inputBar">
                    <form action="">
                        <div className="inputs">
                            <div className="email">
                                <input type="text" name="email" placeholder="Elektron poçt" />
                            </div>
                            <div className="password">
                                <input type="password" name="password" placeholder="Şifrə"/>
                                {/* <div className="openPassword">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512">
	                                    <path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32M144 256a144 144 0 1 1 288 0a144 144 0 1 1-288 0m144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3" />
                                    </svg>
                                </div>
                                <div className="closePassword">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	                                    <g fill="none">
		                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18" />
		                                    <path fill="currentColor" fill-rule="evenodd" d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.1 15.1 0 0 0-3.001 4.11a1.44 1.44 0 0 0 0 1.255a15.1 15.1 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15 15 0 0 0 2.145-3.21a1.44 1.44 0 0 0 0-1.255a15.1 15.1 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.8 10.8 0 0 0-2.808.363z" clip-rule="evenodd" />
	                                    </g>
                                    </svg>
                                </div> */}
                                <a href="/az/reset-password">Şifrəni unutmusunuz?</a>
                            </div>
                        </div>
                        <div className="button">
                            <button>Giriş</button>
                        </div>
                        <p>Burada yenisiniz?   <a href="/az/sign-up">Qeydiyyat</a></p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn