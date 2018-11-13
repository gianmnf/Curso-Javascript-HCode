//Aula G3
// Variável - Evita que haja repetição de código - referência de memória - não pode ser var
// melhor usar o objeto ao invés do value - referência
var nome = document.querySelector("#exampleInputName");
// verifica se está ok
//console.log(nome);
//nome.value = "Gian";
//nome.style.color = "blue";
//Pega todos, mas retorna apenas os selecionados
var genero = document.querySelectorAll("#form-user-create [name=gender]:checked");
var dataNasc = document.querySelector("#exampleInputBirth");
var pais = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var senha = document.querySelector("#exampleInputPassword");
var foto = document.querySelector("#exampleInputFile");
var adm = document.querySelector("#exampleInputAdmin");