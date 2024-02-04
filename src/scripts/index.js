let main = document.getElementById("main")
let root = window.location.pathname

if (root == "/") {
    console.log("home");
}

if (root == "/resumos") {
    console.log("Meus resumos");
    window.location.href = "resumos.html"
}

if (root == "/api") {
    console.log("Api");
}
