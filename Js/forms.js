const form = document.getElementById("form");
const name = document.getElementById("name");
const age = document.getElementById("age");
const profession = document.getElementById("profession");
const email = document.getElementById("email");
const number = document.getElementById("number");
const date = document.getElementById("date");

const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antoni Miguel", age: 69 },
];

//Filtra pessoa através do campo name
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const novaPessoa = {
        name: name.value,
        age: age.value,
        profession: profession.value,
        email: email.value,
        number: number.value,
        date: new Date().toLocaleDateString("pt-BR"),
    };

    console.log(novaPessoa);

    const pessoa = filtraPessoa(name.value);
    console.log(pessoa);
});

const nomes = nomes();
console.log(nomes);

const insereid = insereid();
console.log(insereid);

const maioridade = maioridade();
console.log(maioridade);

const media = media();
console.log(media);

function filtraPessoa(name) {
    return pessoas.filter((pessoas) => pessoas.name == name);
}

//Retorno de Vetor do Array somente com nomes 
function nomes() {
    return pessoas.map((pessoas) => pessoas.name);
}

//Adiciona id ao array
function insereid() {
    let id = 0;
    pessoas.forEach(pessoas => {
        pessoas.id = id;
        id++;
    });
}

//Pessoas que podem tirar carteira
function maioridade() {
    return pessoas.filter((pessoas) => pessoas.age >= '18');
}
//faz a media das idades
function media() {
    let media = 0;

    pessoas.forEach(pessoas => {
        media += pessoas.age;
    })

    return (media / pessoas.length);
}