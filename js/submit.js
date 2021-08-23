function apresentarResultado(){
    window.location.href = 'html/resultado.html';
}

function apresentarGabarito(){
    window.location.href = 'gabarito.html';
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

var valoresArmazenados = 0;
var pegarValores = 0;
var pegarAcertosMatematica = 0;
var pegarAcertosHistoria = 0;
var pegarAcertosGeografia = 0;
var pegarErrosMatematica = 0;
var pegarErrosHistoria = 0;
var pegarErrosGeografia = 0;
var pontuacaoFinal = 0;

var erroRespostaUm = 0;
var pegarErroUm = 0;

function CalcularResultadoMatematica(){
    var valorRadioUm = document.getElementsByClassName("option_math_one");  
    for(var i = 0; i < valorRadioUm.length; i++){
        if(valorRadioUm[i].checked){            
            if(valorRadioUm[i].value == resultadoMatematicaUm){
            	totalAcertosMatematica = totalAcertosMatematica + 1;            
            }else{
                totalErrosMatematica = totalErrosMatematica + 1;
                erroRespostaUm = valorRadioUm[i].value;
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
            data: [pegarAcertosMatematica, pegarAcertosHistoria, pegarAcertosGeografia]
        },{              
            label: 'Erros',
            backgroundColor: 'rgba(158, 186, 239, 1)',
            borderColor: 'rgba(158, 186, 239, 1)',
            data: [pegarErrosMatematica, pegarErrosHistoria, pegarErrosGeografia]       
            }]      
        },
        options:{
            onresize: true
        }
    });
}

function calcularPontuacao(){
    pontuacaoTotal = totalAcertosMatematica + totalAcertosHistoria + totalAcertosGeografia;
}

function mensagemResultado(){
    if(pontuacaoFinal >= 6){
    document.getElementById("mensagemResultado").innerHTML = "<h1>Aprovado! Você Tirou <h1>"+ "<h2><\h2>" + pontuacaoFinal;
    }else if(pontuacaoFinal >= 4 && pontuacaoFinal < 6){
        document.getElementById("mensagemResultado").innerHTML = "<h1>Recuperação! Você Tirou <h1><br>" + "<h3><\h3>" + pontuacaoFinal;
    }else{
        document.getElementById("mensagemResultado").innerHTML = "<h1>Reprovado! Você Tirou<h1><br>" + "<h4><\h4>" + pontuacaoFinal;
    }
}

function armazenarValores(){
    var meuObj = {acertosMatematica: totalAcertosMatematica, acertosHistoria: totalAcertosHistoria, acertosGeografia: totalAcertosGeografia,
        errosMatematica: totalErrosMatematica, errosHistoria: totalErrosHistoria, errosGeografia: totalErrosGeografia,
        totalGeral: pontuacaoTotal, erroUm: erroRespostaUm};
 
    localStorage.setItem(valoresArmazenados, JSON.stringify(meuObj));
}

function lerValores(){
    pegarValores = JSON.parse(localStorage.getItem(valoresArmazenados));
    pegarAcertosMatematica = pegarValores.acertosMatematica;
    pegarAcertosHistoria = pegarValores.acertosHistoria;
    pegarAcertosGeografia = pegarValores.acertosGeografia;
    pegarErrosMatematica = pegarValores.errosMatematica;
    pegarErrosHistoria = pegarValores.errosHistoria;
    pegarErrosGeografia = pegarValores.errosGeografia;
    pontuacaoFinal = pegarValores.totalGeral;
    pegarErroUm = pegarValores.erroUm;
}