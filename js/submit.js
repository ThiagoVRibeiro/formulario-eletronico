function Resultado(){
    window.location.href = 'html/resultado.html';
    function addElemento(){
        var divNova = document.createElement("div");
        var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
        divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada
      
        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var divAtual = document.getElementById("div1");
        document.body.insertBefore(divNova, divAtual);
    }
}


var totalAcertosMatematica = 0;
var totalErrosMatematica = 0;
var resultadoMatematicaUm = 1;
var resultadoMatematicaDois = 1;
var resultadoMatematicaTres = 3;

var totalAcertosHistoria = 0;
var totalErrosHistoria = 0;
var resultadoHistoriaUm = 1;
var resultadoHistoriaDois = 2;
var resultadoHistoriaTres = 3;

var totalAcertosGeografia = 0;
var totalErrosGeografia = 0;
var resultadoGeografiaUm = 2;
var resultadoGeografiaDois = 1;
var resultadoGeografiaTres = 2;

var pontuacaoTotal = 0;

function CalcularResultadoMatematica(){
    var valorRadioUm = document.getElementsByClassName("option_math_one");  
    for(var i = 0; i < valorRadioUm.length; i++){
        if(valorRadioUm[i].checked){            
            if(valorRadioUm[i].value == resultadoMatematicaUm){
            	totalAcertosMatematica = totalAcertosMatematica + 1;            
            }else{
                totalErrosMatematica = totalErrosMatematica + 1;
            }
        }
    } 
    var valorRadioDois = document.getElementsByClassName("option_math_two");  
    for(var i = 0; i < valorRadioDois.length; i++){
        if(valorRadioDois[i].checked){                    
            if(valorRadioDois[i].value == resultadoMatematicaDois){
            	totalAcertosMatematica = totalAcertosMatematica + 1;            
            }else{
                totalErrosMatematica = totalErrosMatematica + 1;
            }
        }
    
    } 
    var valorRadioTres = document.getElementsByClassName("option_math_three");  
    for(var i = 0; i < valorRadioTres.length; i++){
        if(valorRadioTres[i].checked){            
            if(valorRadioTres[i].value == resultadoMatematicaTres){
            	totalAcertosMatematica = totalAcertosMatematica + 1;            
            }else{
                totalErrosMatematica = totalErrosMatematica + 1;
            }
        }
    } 
    alert("Pontuacao Total Matematica: " + totalAcertosMatematica + "Total erradas: " + totalErrosMatematica);
}

function CalcularResultadoHistoria(){    
    var valorRadioUm = document.getElementsByClassName("option_history_one");  
    for(var i = 0; i < valorRadioUm.length; i++){
        if(valorRadioUm[i].checked){            
            if(valorRadioUm[i].value == resultadoHistoriaUm){
            	totalAcertosHistoria = totalAcertosHistoria + 1;            
            }else{
                totalErrosHistoria = totalErrosHistoria + 1;
            }
        }
    } 
  var valorRadioDois = document.getElementsByClassName("option_history_two");  
    for(var i = 0; i < valorRadioDois.length; i++){
        if(valorRadioDois[i].checked){              
            if(valorRadioDois[i].value == resultadoHistoriaDois){
            	totalAcertosHistoria = totalAcertosHistoria + 1;            
            }else{
                totalErrosHistoria = totalErrosHistoria + 1;
            }
        }
    } 
  var valorRadioTres = document.getElementsByClassName("option_history_three");  
    for(var i = 0; i < valorRadioTres.length; i++){
        if(valorRadioTres[i].checked){           
            if(valorRadioTres[i].value == resultadoHistoriaTres){
            	totalAcertosHistoria = totalAcertosHistoria + 1;            
            }else{
                totalErrosHistoria = totalErrosHistoria + 1;
            }
        }
    } 
    alert("Pontuacao Total Historia: " + totalAcertosHistoria);
}

function CalcularResultadoGeografia(){    
    var valorRadioUm = document.getElementsByClassName("option_geography_one");  
    for(var i = 0; i < valorRadioUm.length; i++){
        if(valorRadioUm[i].checked){            
            if(valorRadioUm[i].value == resultadoGeografiaUm){
            	totalAcertosGeografia = totalAcertosGeografia + 1;            
            }else{
                totalErrosGeografia = totalErrosGeografia + 1;
            }
        }
    } 
  var valorRadioDois = document.getElementsByClassName("option_geography_two");  
    for(var i = 0; i < valorRadioDois.length; i++){
        if(valorRadioDois[i].checked){            
            if(valorRadioDois[i].value == resultadoGeografiaDois){
            	totalAcertosGeografia = totalAcertosGeografia + 1;            
            }else{
                totalErrosGeografia = totalErrosGeografia + 1;
            }
        }
    } 
  var valorRadioTres = document.getElementsByClassName("option_geography_three");  
    for(var i = 0; i < valorRadioTres.length; i++){
        if(valorRadioTres[i].checked){          
            if(valorRadioTres[i].value == resultadoGeografiaTres){
            	totalAcertosGeografia = totalAcertosGeografia + 1;            
            }else{
                totalErrosGeografia = totalErrosGeografia + 1;
            }
        }
    } 
    alert("Pontuacao Total Geografia: " + totalAcertosGeografia);
}

function montarGrafico(){
    var ctx = document.getElementById('myChart').getContext('2d');    
    var chart = new Chart (ctx, {
    type: 'bar',
    data: {
        labels: ['Matemática', 'História', 'Geografia'],
        datasets: [{
        label: 'Acertos',
        backgroundColor: 'rgba(27, 80, 182, 1)',
        borderColor: 'rgba(27, 80, 182, 1)',
        data: [mat, hist, 5]
        },{              
        label: 'Erros',
        backgroundColor: 'rgba(158, 186, 239, 1)',
        borderColor: 'rgba(158, 186, 239, 1)',
        data: [4, 5, 6]
        
        }]      
        },
        options:{
            onresize: true
         }
    });
}

function calcularPontuacao(){
    pontuacaoTotal = totalAcertosMatematica + totalAcertosHistoria + totalAcertosGeografia;
alert("Pontuacao Total: " + pontuacaoTotal);
}

function mensagemResultado(){
    if(pontuacaoTotal > 6){
    document.getElementById("mensagemResultado").innerHTML = "<h1>Aprovado! Você Tirou <h1>";
    }else if(pontuacaoTotal > 4 && pontuacaoTotal <6){
        document.getElementById("mensagemResultado").innerHTML = "<h1>Recuperação! Você Tirou <h1>";
    }else{
        document.getElementById("mensagemResultado").innerHTML = "<h1>Reprovado! Você Tirou <h1>";
    }
}

var armazenarAcertosMatematica = 0;
var armazenarAcertosHistoria = 0;
var armazenarAcertosGeografia = 0;
var armazenarErrosMatematica = 0;
var armazenarErrosHistoria = 0;
var armazenarErrosGeografia = 0;

var pegarAcertosMatematica = 0;
var pegarAcertosHistoria = 0;
var pegarAcertosGeografia = 0;
var pegarErrosMatematica = 0;
var pegarErrosHistoria = 0;
var pegarErrosGeografia = 0;

var mat = 0;
var hist = 0;
var geog = 0;

function armazenarAcertos(){
    var meuObj = {Matematica: totalAcertosMatematica, Historia: totalAcertosHistoria, Geografia: totalErrosGeografia};
 
    localStorage.setItem(armazenarAcertosMatematica, JSON.stringify(meuObj));
}

function lerAcertos(){
    pegarAcertosMatematica = JSON.parse(localStorage.getItem(armazenarAcertosMatematica));
    mat = pegarAcertosMatematica.Matematica;
    hist = pegarAcertosMatematica.Historia;    
    alert("Armazenou: " + pegarAcertosMatematica.Matematica + "Armazenou: " + pegarAcertosMatematica.Historia);
}

/*Esse Trecho deu certo
var armazenarAcertosMatematica = 0;
var pegarAcertosMatematica = 0;

function salvarAcertosMatematica(){    
    localStorage.setItem(armazenarAcertosMatematica, totalAcertosMatematica);
}

function lerAcertosMatematica(){
    pegarAcertosMatematica = localStorage.getItem(armazenarAcertosMatematica);    
    alert("Armazenou: " + pegarAcertosMatematica);
}
*/

/*
var armazenarAcertosMatematica = 0;
var armazenarAcertosHistoria = 0;
var armazenarAcertosGeografia = 0;
var armazenarErrosMatematica = 0;
var armazenarErrosHistoria = 0;
var armazenarErrosGeografia = 0;

var pegarAcertosMatematica = 0;
var pegarAcertosHistoria = 0;
var pegarAcertosGeografia = 0;
var pegarErrosMatematica = 0;
var pegarErrosHistoria = 0;
var pegarErrosGeografia = 0;


function armazenarAcertosMatematica(){    
    localStorage.setItem(armazenarAcertosMatematica, totalAcertosMatematica);
}

function lerAcertosMatematica(){
    pegarAcertosMatematica = localStorage.getItem(armazenarAcertosMatematica);    
    alert(pegarAcertosMatematica);
}
*/