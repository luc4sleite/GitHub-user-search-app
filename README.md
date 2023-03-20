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

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

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
