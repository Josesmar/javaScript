/*
Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

 
Exemplo de Entrada	Exemplo de Saída
576

576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00

11257

11257
112 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
0 nota(s) de R$ 1,00

503

503
5 nota(s) de R$ 100,00
0 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
0 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00
*/

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
