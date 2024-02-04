let body = document.querySelector("body")
let root = window.location.pathname

if (root == "/") {
    console.log("home");
}

if (root == "/resumos") {
    console.log("Meus resumos");
}

if (root == "/api") {
    console.log("Api");
}
