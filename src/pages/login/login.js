/* import { cors, CorsOptions, CorsRequest, CorsOptionsDelegate } from "cors"; */
import { setUserData } from "../../scripts/data";
import { newError } from "../../components/error/error";
let alterToSignIn = document.getElementById("alterToSignIn")
let confirmPasswordDiv = document.getElementById("confirmPasswordDiv")
let loginBtn = document.getElementById("loginBtn")
let rememberMe = document.getElementById("rememberMe")

if (localStorage.email != undefined && localStorage.password != undefined) {
    document.getElementById("password").value = `${localStorage.password}`
    document.getElementById("email").value = `${localStorage.email}`
    rememberMe.classList.add("active")
}

rememberMe.onclick = function () {
    rememberMe.classList.toggle("active")
}
alterToSignIn.onclick = function () {
    if (confirmPasswordDiv.classList.contains("unshow")) {
        confirmPasswordDiv.classList.remove("unshow")
        alterToSignIn.textContent = "Login"
        loginBtn.textContent = "Criar conta"
    } else {
        confirmPasswordDiv.classList.add("unshow")
        alterToSignIn.textContent = "Criar conta"
        loginBtn.textContent = "Login"
    }
}

loginBtn.onclick = function () {
    let confirmPassword = document.getElementById("confirmPassword").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value
    if (password != "" && email != "") {
        if (confirmPasswordDiv.classList.contains("unshow")) {
            fetch(`https://resume-ai-api.vercel.app/login?login=${email}&password=${password}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erro na requisição: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.message != "this account not exists") {
                        setUserData(data)
                        if (rememberMe.classList.contains("active")) {
                            localStorage.setItem("email", `${email}`)
                            localStorage.setItem("password", `${password}`)
                        } else {
                            localStorage.removeItem("email")
                            localStorage.removeItem("password")
                        }
                        let main_loginSection = document.querySelector(".main__loginSection")
                        main_loginSection.style.opacity = "0"
                        setTimeout(() => {
                            main_loginSection.style.display = "none"
                        }, 500);
                    } else {
                        newError("Esta conta não existe")
                    }
                })
                .catch(error => {
                    console.error('Erro durante a requisição:', error);
                });
        } else {
            if (password.length > 7) {
                if (password == confirmPassword) {
                    fetch(`https://resume-ai-api.vercel.app/createaccount?login=${email}&password=${password}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Erro na requisição: ${response.statusText}`);
                            }
                            return response.json();
                        })
                        .then(data => {
                            if (data.message != "this account exists") {
                                setUserData(data)
                                if (rememberMe.classList.contains("active")) {
                                    localStorage.setItem("email", `${email}`)
                                    localStorage.setItem("password", `${password}`)
                                }
                                let main_loginSection = document.querySelector(".main__loginSection")
                                main_loginSection.style.opacity = "0"
                                setTimeout(() => {
                                    main_loginSection.style.display = "none"
                                }, 500);
                            } else {
                                newError("Esta conta já existe")
                            }
                        })
                        .catch(error => {
                            console.error('Erro durante a requisição:', error);
                        });
                } else {
                    newError("As senhas não correspondem")
                }
            } else {
                newError("A senha deve ter no mínimo 8 caracteres")
            }
        }
    } else {
        newError("preencha os campos")
    }
}