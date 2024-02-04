let body = document.querySelector("body")
let root = window.location.pathname

if (root == "/") {
    console.log("home");
    body.innerHTML=`
    <main id="main">
    <header class="main__header">
      <nav class="header__nav">
        <a class="header__nav__a" href="#">Criar resumo</a>
        <a class="header__nav__a" href="#">Meus resumos</a>
      </nav>
      <button class="header__nav__btn" type="button">View API</button>
    </header>
    <h1 class="main__logo">RESUME.<span class="logo__span">Ai</span></h1>
    <div class="main__createResumeDiv">
      <ion-icon class="main__createResumeDiv__icon" name="search"></ion-icon>
      <input class="main__createResumeDiv__input" type="text" id="createResumeInput" placeholder="Digite o que deseja resumir" aria-disabled="true">
    </div>
    <div class="main__responseResume">
      <button class="responseResume__btn" id="copyResume"><ion-icon name="copy-outline"></ion-icon></button>
      <textarea class="responseResume__textarea" name="dataResume" id="dataResume" cols="30" rows="10" placeholder="Seu resumo aparecerá aqui"></textarea>
    </div>
    <a class="author" href="#">JVS-DEV<ion-icon name="code-slash"></ion-icon></a>
  </main>
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
  <script type="module" src="src/scripts/index.js"></script>`
}

if (root == "/resumos") {
    console.log("Meus resumos");
    body.innerHTML = `<main id="main">
    <header class="main__header">
      <nav class="header__nav">
        <a class="header__nav__a" href="#">Criar resumo</a>
        <a class="header__nav__a" href="#">Meus resumos</a>
      </nav>
      <button class="header__nav__btn" type="button">View API</button>
    </header>
    <h1 class="main__logo">RESUME.<span class="logo__span">Ai</span></h1>
    <div class="main__createResumeDiv">
      <ion-icon class="main__createResumeDiv__icon" name="search"></ion-icon>
      <input class="main__createResumeDiv__input" type="text" id="createResumeInput" placeholder="Digite o que deseja resumir" aria-disabled="true">
    </div>
    <div class="main__responseResume">
      <button class="responseResume__btn" id="copyResume"><ion-icon name="copy-outline"></ion-icon></button>
      <textarea class="responseResume__textarea" name="dataResume" id="dataResume" cols="30" rows="10" placeholder="Seu resumo aparecerá aqui"></textarea>
    </div>
    <a class="author" href="#">RESUMOS | JVS-DEV<ion-icon name="code-slash"></ion-icon></a>
  </main>
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
  <script type="module" src="src/scripts/index.js"></script>`
}

if (root == "/api") {
    console.log("Api");
}
