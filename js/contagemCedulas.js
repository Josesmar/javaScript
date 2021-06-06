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