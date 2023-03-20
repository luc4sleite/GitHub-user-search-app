# GitHub user search app solution

Esta é uma solução ao [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6).

## Índice

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que eu aprendi](#o-que-eu-aprendi)

## Visão geral

### O desafio

Os usuários poderão:

- Visualizar o layout de acordo com o aparelho que estiver utilizando
- Ver as mudanças de estilos conforme interage com a página
- Procurar por usuários do GitHub através do seu nome de usuário
- Ver informações relevantes relativas ao usuário pesquisado
- Alterar entre os temas claro e escuro.

### Screenshot

![Screenshot 2023-03-19 at 23-28-57 devfinder](https://user-images.githubusercontent.com/115735167/226232924-55ed5e95-4ece-40e6-8fd4-3179a75589b4.png)


![Screenshot 2023-03-19 at 23-32-46 devfinder](https://user-images.githubusercontent.com/115735167/226233339-48696f51-6bec-4c08-b01a-6ef9b132d7b3.png)

![app_](https://user-images.githubusercontent.com/115735167/226233392-ce73bd30-ce70-410d-a14e-38d4c6cd580a.gif)              ![app_2](https://user-images.githubusercontent.com/115735167/226233735-936072f1-2301-46f6-98ae-a07009925fbf.gif)


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/github-users-search-app-qQ3W4IfJQo](https://www.frontendmentor.io/solutions/github-users-search-app-qQ3W4IfJQo)
- Live Site URL: [https://git-hub-user-search-app-steel.vercel.app/](https://git-hub-user-search-app-steel.vercel.app/)

## Meu processo

### Construído com

- Tags HTML5 semânticas
- CSS media queries
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript


### O que eu aprendi

Neste projeto aprendi como realizar o consumo de uma API
```js
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
```

e melhorei minhas hábilidades em CSS e Java Script, criando um tema claro e escuro que altera conforme o botão é clicado.
