////

const { nextTick } = require("q");

/*Criando variáveis*/
/*
var nome = "Josesmar Santos";
var idade = 33;
var valor1 = 10;
var valor2 = 23;
var frase = "Japão é o melhor time do mundo";
var lista = ["maça", "pera", "laranja"];
var fruta = {nome: "maça", cor: "vermelha"};
var frutas = [{nome: "maça", cor: "vermelha"},{nome: "pera", cor: "amarela"}];
*/

/*Imprimindo alerta na página*/
// alert(nome + " tem " + idade + " anos");

/*Realizando a soma de dois valores */
// alert("A some é: " + (valor1 + valor2));

/*Utlizando o console do navegador (Usar f12 ou inspecionar do botão direito) */
/*
console.log(nome);
console.log(idade);
*/

/*Trabalhando com Replace*/
/*
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
*/

/*Trabalhando com toUpperCase e toLowerCase */
/*
console.log(frase.toUpperCase());
Console.log(frase.toLowerCase());
*/

/*Trabalhando com listas*/
/*
console.log(lista);
console.log(lista[1]);
console.log(lista.length);
*/

/*Adicionando valor na lista*/
/*
lista.push("uva");
console.log(lista.length);
console.log("adicionado a fruta " + lista[3]);
*/

/*Removendo valor da lista */
/* lista.pop("");*/

//Imprimindo a lista invertida
/*
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
console.log(fruta);
alert(fruta.cor);
*/

/*Condicionais e laços de repetição e Data*/
/*
var idade = prompt("Qual é sua idade?");
if (idade > 18 ){
    alert("maior de idade");
}else{
    alert("menor de idade");
    };
*/    

/*
var count = 0;
while (count < 5){
    console.log(count);    
    count++;
}
*/

//Trabalhando com o laço for
/*
var count;
for (count = 0; count <=5; count++){
    alert(count);
}
*/

/*Trabalhando com date
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
function soma(n1,n2){
    return n1 + n2;    
}
alert(soma(5,10));

function validaIdade (idade){
    var vaidar;    
    if (idade >= 18){
        validar = true
    } else{
        validar = false;
    }  
    return validar;
}
var idade = prompt("Qual é sua idade");
console.log(validaIdade(idade));
*/

function botao(){   
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    alert("Obrigado por clicar");
}

function redirecionar(){
//   window.open("C:/Desenvolvimento/html5/introducao-criacao-website-html-css3/index.html");
  window.location.href="C:/Desenvolvimento/html5/introducao-criacao-website-html-css3/index.html";

}
function trocar(element){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    element.innerHTML = "Obrigado por passar o mouse";
 
}

function voltar(element){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";    
    element.innerHTML = "Passe o mouse aqui";  
}

function load(){
    alert("Página carregada com sucesso")
}

function functionChange(element){
    console.log(element.value);

}

function analiseNumeros(){    
    numero = Array(5);
    
    numero[0] = gets();
    numero[1] = gets();
    numero[2] = gets();
    numero[3] = gets();
    numero[4] = gets();
    
    pares = numero.filter(value => value % 2 == 0);
    impares = numero.filter(value => value % 2 != 0);    
    positivos = numero.filter(value => value > 0);
    negativos = numero.filter(value => value < 0);
    
    console.log(pares.length + " valor(es) par(es)");
    console.log(impares.length + " valor(es) impar(es)");    
    console.log(positivos.length + " valor(es) positivo(s)");
    console.log(negativos.length + " valor(es) negativo(s)");
}


function contagemCedulas() {    
    let valor = parseInt(gets());
    let nota100 = 0;
    let nota50 = 0;
    let nota20 = 0;
    let nota10 = 0;
    let nota5 = 0;
    let nota2 = 0;
    let nota1 = 0;
    let valorSaida = valor;
    
    
    while (valor > 0){
    
    if (valor >= 100){
        nota100 = nota100 + 1;   
        valor = valor - 100; 
     } 
     else if ((valor >= 50) && (valor < 100)) {
        nota50 = nota50 + 1;    
        valor = valor - 50;         
     } 
     else if ((valor >= 20) && (valor < 50)) {
        nota20 = nota20 + 1;    
        valor = valor - 20;                 
     }
     else if ((valor >= 10) && (valor < 50)) {
        nota10 = nota10 + 1;    
        valor = valor - 10;                 
     }
    else  if ((valor >= 5) && (valor < 10)) {
        nota5 = nota5 + 1
        valor = valor - 5;         
     }
    else if ((valor >= 2) && (valor < 5)) {
        nota2 = nota2 + 1;    
        valor = valor - 2;                 
     }
    else if ((valor >= 1) && (valor < 2)) {
        nota1 = nota1 + 1;    
        valor = valor - 1;                 
     }    
    }
    
    console.log(valorSaida);
    console.log(nota100 + " nota(s) de R$ 100,00");
    console.log(nota50 + " nota(s) de R$ 50,00");
    console.log(nota20 + " nota(s) de R$ 20,00");
    console.log(nota10 + " nota(s) de R$ 10,00");
    console.log(nota5 + " nota(s) de R$ 5,00");
    console.log(nota2 + " nota(s) de R$ 2,00");
    console.log(nota1 + " nota(s) de R$ 1,00");
    }
    
function consumoMedioAutomovel(){

    let distancia= parseInt(gets());
    let combustivelConsumido = parseFloat(gets());
    
        let consumoMedio = (distancia/combustivelConsumido);
        
        console.log(consumoMedio.toFixed(3) + " km/l");   
    
}