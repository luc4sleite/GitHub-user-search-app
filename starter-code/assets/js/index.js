const body = document.querySelector("body");

// CABEÇALHO
const darkButton = document.querySelector(".theme-button__dark");
const lightButton = document.querySelector(".theme-button__light");
const logo = document.querySelector(".logo");

// BARRA DE PESQUISA
const searchBox = document.querySelector(".search-box");
const searchBar = document.querySelector('input[type="text"]');
const searchButton = document.querySelector(".search__button");
const errors = document.querySelector(".error");

// DADOS DO USUÁRIO
const userContainer = document.querySelector(".user__container");
let userAvatar = document.querySelector(".user__avatar");
const userName = document.querySelector(".user__name");
const userLogin = document.querySelector(".user__login");
const userData = document.querySelector(".user__data");
const userBio = document.querySelector(".user__bio");

// NÚMEROS DO USUÁRIO
const userNumber = document.querySelector(".user__number");
const repos = document.querySelector(".repos__number");
const followers = document.querySelector(".followers__number");
const following = document.querySelector(".following__number");
const itemTitle = document.querySelectorAll(".item-title");
const itemText = document.querySelectorAll(".item-text");

// OUTRAS INFORMAÇÕES DO USUÁRIO
const itemInformation = document.querySelectorAll(".othersInformation__item");
const address = document.querySelector(".address");
const website = document.querySelector(".website");
const twitter = document.querySelector(".twitter");
const company = document.querySelector(".company");
const icon = document.querySelectorAll("path");

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
  searchBar.style.color = "var(--white)";
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
  for (let i = 0; i < icon.length; i++) {
    icon[i].style.fill = "var(--white)";
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
  for (let i = 0; i < icon.length; i++) {
    icon[i].style.fill = "var(--light-mode-gray)";
  }
});

// BUSCA INFORMAÇÕES DO USUÁRIO

async function onClickSearchBox(event) {
  event.preventDefault();
  const username = searchBar.value;
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      const dateData = data.created_at.slice(0, data.created_at.length - 10);

  
    userAvatar.src = data.avatar_url;
    userName.innerHTML = data.name;
    userLogin.innerHTML = `@${data.login}`;
    userData.innerHTML = `Joined ${dateData}`;
    userBio.innerHTML =
      data.bio === "" || data.bio === null
        ? "This profile has no bio..."
        : data.bio;

    repos.innerHTML = data.public_repos;
    followers.innerHTML = data.followers;
    following.innerHTML = data.following;

    address.innerHTML =
      data.location === "" || data.location === null
        ? "No Location"
        : data.location;

    twitter.innerHTML =
      data.twitter_username === "" || data.twitter_username === null
        ? "Not avaiable"
        : data.twitter_username;

    website.innerHTML =
      data.blog === "" || data.blog === null ? "Not avaiable" : data.blog;

    company.innerHTML =
      data.company === "" || data.company === null
        ? "Not avaiable"
        : data.company;

    searchBar.value = "";
    } else if (response.status === 404){
      errors.style.display = "block";
      searchBar.value = "";
    } else {
      throw new Error(`Erro ${response.status} ao buscar usuário`);
    }
  } catch (error) {
    console.error(error);
    errors.style.display = "block";
    searchBar.value = "";
  }
  
}

searchButton.addEventListener("click", onClickSearchBox);
