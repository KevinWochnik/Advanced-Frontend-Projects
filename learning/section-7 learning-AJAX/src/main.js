const formAdd = document.querySelector(".selection");

const getUsers = (e) => {
  const usersNumber = document.querySelector(`[name="users-number"]`).value;
  const usersGender = document.querySelector(
    `[name="generator__select"]`
  ).value;
  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${
    usersGender ? "male,female" : usersGender
  }`;
  console.log(usersNumber, usersGender);
  e.preventDefault();
  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw Error("to nie jest odpowiedź 200");
      } else {
        return response.json();
      }
    })
    .then((json) => showUsers(json.results))
    .catch((err) => console.log(err));
};

const showUsers = (users) => {
  const resultArea = document.querySelector(".userList");
  users.forEach((user) => {
    console.log(user);
    const item = document.createElement("div");
    item.classList.add("user");
    item.innerHTML = `
      <div class="user">
      <div class="user__name">
      ${user.name.title.toUpperCase()}
      ${user.name.first.toUpperCase()}
      ${user.name.last.toUpperCase()}
      </div>
      <img class="user_image" src=${user.picture.medium}></img>
      </div>
      `;
    resultArea.appendChild(item);
  });
};

formAdd.addEventListener("submit", getUsers);
