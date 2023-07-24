const formulario = document.querySelector("form");

const inome = document.querySelector(".nome");
const icpf = document.querySelector(".cpf");


function cadastrar () {
    fetch("http://localhost:8080/Collaborator/create",
    {
        headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ 
            cpf: icpf.value,
            name: inome.value
        })
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
}

function limpar () {
    icpf.value = "",
    inome.value = ""
};



formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrar();
    limpar();
});
