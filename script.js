const button = document.getElementById("btn");
const pTag = document.getElementById("pTag");
button.addEventListener('click', apiCall);

async function apiCall() {
  const options = {
    method: 'GET',
    headers: {
      "Accept": "application/json"
    }
  }
  try {
    let response = await fetch("https://icanhazdadjoke.com/", options);
    let responseAsJson = await response.json();
    pTag.innerText = responseAsJson.joke;
  } catch (error) {
    console.log(error.message);
  }
}

