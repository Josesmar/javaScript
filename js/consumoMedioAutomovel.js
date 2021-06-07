function consumoMedioAutomovel(){
    let distancia= parseInt(gets());
    let combustivelConsumido = parseFloat(gets());
    
        let consumoMedio = (distancia/combustivelConsumido);
        
        console.log(consumoMedio.toFixed(3) + " km/l");
}