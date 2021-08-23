function testar(){
    alert("VAlor Erro" + pegarErroUm);
}

function gabaritoMatematica(){
    if(pegarErroUm == 2){
        document.getElementById("resposta_dois_um").innerHTML = "<H1>33</h1>";
        document.getElementById("resposta_dois_dois").innerHTML = "<H1>54</h1>";
        document.getElementById("resposta_dois_tres").innerHTML = "<H1>99</h1>";
    }else if(pegarErroUm == 3){
        document.getElementById("resposta_tres").innerHTML = "<H1>99</h1>";
    }else{
        document.getElementById("resposta_um").innerHTML = "<H1>33</h1>";
    }
    
}

/*document.getElementById("mensagemResultado").innerHTML = 
"<h1>Aprovado! Você Tirou <h1>"+ "<h2><\h2>" + pontuacaoFinal; */