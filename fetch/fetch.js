const url_todos = "https://jsonplaceholder.typicode.com/todos";

const container = document.querySelector(".container");

fetch (url_todos)
  .then((res) => res.json())
  .then((data) => showData(data))
  .catch((err) => console.log("Error: ", err));

function showData(data) {
    let body = ``;
    for (let i = 0; i < data.length; i++) {
        body += ` 
       
        <div class="users">

            <p class="title">${data[i].title}</p>
            <p>ID: ${data[i].id}</p>
            <p>User ID: ${data[i].userId}</p>
            <p class=${data[i].completed === true ? "true" : "false"}><b>Status:</b> ${data[i].completed}</p>
       
        </div>
       
            `;
}
    document.getElementById("fetch-petition").innerHTML = body;
}
