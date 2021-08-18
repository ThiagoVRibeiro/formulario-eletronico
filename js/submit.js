function Resultado(){
    window.location.href = 'html/resultado.html';
    
}

function CalcularResultado(){
    alert('evento funcionado')
    var valorRadio = document.getElementsByName("option");
    for(var i = 0; i < valorRadio.length; i++){
        if(valorRadio[i].checked){
            alert("Teste deu certo, valor: " + valorRadio[i].value);
        }
    }
}