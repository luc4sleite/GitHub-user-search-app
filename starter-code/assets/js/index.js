let body = document.querySelector("body");

// CABEÇALHO
let darkButton = document.querySelector(".theme-button__dark");
let lightButton = document.querySelector(".theme-button__light");
let logo = document.querySelector(".logo");

// BARRA DE PESQUISA
let searchBox = document.querySelector(".search-box");
let searchBar = document.querySelector('input[type="text"]');

// DADOS DO USUÁRIO
let userContainer = document.querySelector(".user__container");
let userName = document.querySelector(".user__name");
let userData = document.querySelector(".user__data");
let userBio = document.querySelector(".user__bio");

// NÚMEROS DO USUÁRIO
let userNumber = document.querySelector(".user__number");
let itemTitle = document.querySelectorAll(".item-title");
let itemText = document.querySelectorAll(".item-text");

// OUTRAS INFORMAÇÕES DO USUÁRIO
let itemInformation = document.querySelectorAll(".othersInformation__item");

// MUDANÇA DO TEMA

// TEMA ESCURO
darkButton.addEventListener("click", function () {
  // CABEÇALHO
  body.style.backgroundColor = "var(--dark-mode-background)";
  darkButton.style.display = "none";
  lightButton.style.display = "flex";
  logo.style.color = "var(--white)";

  // BARRA DE PESQUISA
  searchBox.style.backgroundColor = "var(--dark-mode-card-color)";
  searchBox.style.boxShadow = "none";
  searchBar.style.backgroundColor = "var(--dark-mode-card-color)";
  searchBar.classList.add("input__dark-theme");

  //   DADOS DO USUÁRIO
  userContainer.style.boxShadow = "none";
  userContainer.style.background = "var(--dark-mode-card-color)";
  userName.style.color = "var(--white)";
  userData.style.color = "var(--white)";
  userBio.style.color = "var(--white)";

  //   NÚMEROS DO USUÁRIO
  userNumber.style.background = "var(--dark-mode-background)";
  for (let i = 0; i < itemTitle.length; i++) {
    itemTitle[i].style.color = "var(--white)";
    itemText[i].style.color = "var(--white)";
  }

  //   OUTRAS INFORMAÇÕES DO USUÁRIO
  for (let i = 0; i < itemInformation.length; i++) {
    itemInformation[i].style.color = "var(--white)";
  }
});

// TEMA CLARO
lightButton.addEventListener("click", function () {
  // CABEÇALHO
  body.style.backgroundColor = "var(--light-mode-background)";
  lightButton.style.display = "none";
  darkButton.style.display = "flex";
  logo.style.color = "var(--light-mode-logo-color)";

  //   BARRA DE PESQUISA
  searchBox.style.backgroundColor = "var(--light-mode-card-color)";
  searchBox.style.boxShadow = "var(--light-mode-shadow)";
  searchBar.style.backgroundColor = "var(--light-mode-card-color)";
  searchBar.style.color = "var(--light-mode-text)";
  searchBar.classList.remove("input__dark-theme");

  //   DADOS DO USUÁRIO
  userContainer.style.boxShadow = "var(--light-mode-shadow)";
  userContainer.style.background = "var(--light-mode-card-color)";
  userName.style.color = "var(--light-mode-black)";
  userData.style.color = "var(--grey)";
  userBio.style.color = "var(--light-mode-gray)";

  //   NÚMEROS DO USUÁRIO
  userNumber.style.background = "var(--light-mode-background)";
  for (let i = 0; i < itemTitle.length; i++) {
    itemTitle[i].style.color = "var(--light-mode-gray)";
    itemText[i].style.color = "var(--light-mode-black";
  }
  //   OUTRAS INFORMAÇÕES DO USUÁRIO
  for (let i = 0; i < itemInformation.length; i++) {
    itemInformation[i].style.color = "var(--light-mode-gray)";
  }
});
