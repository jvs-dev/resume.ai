import { getUserData } from "../../scripts/data";
let createResumeInput = document.getElementById("createResumeInput")
let dataResume = document.getElementById("dataResume")
let copyResume = document.getElementById("copyResume")
copyResume.onclick = function () {
    dataResume.select();
    dataResume.setSelectionRange(0, 99999)
    document.execCommand("copy");    
}
function writeResponse(res) {
    dataResume.value = ""
    let i = 0
    setInterval(() => {
        if (i < res.length) {
            dataResume.value = `${dataResume.value}${`${res}`[i]}`
            dataResume.scrollTop = dataResume.scrollHeight;
            i++
        } else {
            createResumeInput.disabled = false
            createResumeInput.style.opacity = "1"
        }
    }, 30);
}

function loadingResponse() {
    dataResume.value = "."
    setTimeout(() => {
        dataResume.value = ".."
        setTimeout(() => {
            dataResume.value = "..."
        }, 500);
    }, 500);
}

window.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        createResumeInput.disabled = true
        loadingResponse()
        let loading = setInterval(() => {
            loadingResponse()
        }, 1500);
        createResumeInput.style.opacity = "0.6"
        if (createResumeInput.value != "") {
            fetch(`https://resume-ai-api.vercel.app/createresume?title=${createResumeInput.value}&login=${getUserData().useremail}&password=${getUserData().userpassword}`)
                .then(response => {
                    if (!response.ok) {
                        createResumeInput.disabled = false
                        createResumeInput.style.opacity = "1"
                        throw new Error(`Erro na requisição: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    clearInterval(loading)
                    this.setTimeout(() => {
                        writeResponse(data.resume);
                    }, 1500);
                })
                .catch(error => {
                    console.error('Erro durante a requisição:', error);
                    createResumeInput.disabled = false
                    createResumeInput.style.opacity = "1"
                });

        }
    }
});
