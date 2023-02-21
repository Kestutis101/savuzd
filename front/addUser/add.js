const nameInput = document.querySelector("[type='firstName']");
const surnameInput = document.querySelector("[type='lastName']");
const emailInput = document.querySelector("[type='emailAddress']");
const membershipInput = document.querySelectorAll("#membership");
const sendButton = document.querySelector(".new-user-button");

sendButton.addEventListener("click", async () => {
  const name = nameInput.value;
  const surname = surnameInput.value;
  const email = emailInput.value;
  const membership = membershipInput.value;
  console.log(name);
  console.log(surname);
  console.log(email);
  const res = await fetch(`http://127.0.0.1:3000/users/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      name,
      surname,
      email,
      membership,
    }),
  });
  const data = await res.json();

  console.log(data);
});
