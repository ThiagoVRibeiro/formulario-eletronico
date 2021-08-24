function testar(){
    alert("VAlor Erro" + pegarErroUm);
}

function gabaritoMatematica(){
    if(pegarErroUm == 2){
        document.getElementById("resposta_um").innerHTML = "<H1>33</h1>";
        document.getElementById("resposta_dois_errada").innerHTML = "<H1>54</h1>";
        document.getElementById("resposta_tres").innerHTML = "<H1>99</h1>";
    }else if(pegarErroUm == 3){
        document.getElementById("resposta_um").innerHTML = "<H1>33</h1>";
        document.getElementById("resposta_dois").innerHTML = "<H1>54</h1>";
        document.getElementById("resposta_tres_errada").innerHTML = "<H1>99</h1>";
    }else{
        document.getElementById("resposta_um").innerHTML = "<H1>33</h1>";
        document.getElementById("resposta_dois").innerHTML = "<H1>54</h1>";
        document.getElementById("resposta_tres").innerHTML = "<H1>99</h1>";
    }

    if(pegarErroDois == 2){
        document.getElementById("resposta_quatro").innerHTML = "<H1>45%</h1>";
        document.getElementById("resposta_cinco_errada").innerHTML = "<H1>40%</h1>";
        document.getElementById("resposta_seis").innerHTML = "<H1>46%</h1>";
    }else if(pegarErroDois == 3){
        document.getElementById("resposta_quatro").innerHTML = "<H1>45%</h1>";
        document.getElementById("resposta_cinco").innerHTML = "<H1>40%</h1>";
        document.getElementById("resposta_seis_errada").innerHTML = "<H1>46%</h1>";
    }else{
        document.getElementById("resposta_quatro").innerHTML = "<H1>45%</h1>";
        document.getElementById("resposta_cinco").innerHTML = "<H1>40%</h1>";
        document.getElementById("resposta_seis").innerHTML = "<H1>46%</h1>";
    }

    if(pegarErroTres == 1){
        document.getElementById("resposta_sete_errada").innerHTML = "<H1>80</h1>";
        document.getElementById("resposta_oito").innerHTML = "<H1>125</h1>";
        document.getElementById("resposta_nove").innerHTML = "<H1>100</h1>";
    }else if(pegarErroTres == 2){
        document.getElementById("resposta_sete").innerHTML = "<H1>80</h1>";
        document.getElementById("resposta_oito_errada").innerHTML = "<H1>125</h1>";
        document.getElementById("resposta_nove").innerHTML = "<H1>100</h1>";
    }else{
        document.getElementById("resposta_sete").innerHTML = "<H1>80</h1>";
        document.getElementById("resposta_oito").innerHTML = "<H1>125</h1>";
        document.getElementById("resposta_nove").innerHTML = "<H1>100</h1>";
    }

    if(pegarErroQuatro == 2){
        document.getElementById("resposta_dez").innerHTML = "<H1>Estados Unidos, Japão e Europa.</h1>";
        document.getElementById("resposta_onze_errada").innerHTML = "<H1>Inglaterra, Estados Unidos, URSS e Ásia.</h1>";
        document.getElementById("resposta_doze").innerHTML = "<H1>Itália, Estados Unidos, Japão e Ásia.</h1>";
    }else if(pegarErroQuatro == 3){
        document.getElementById("resposta_dez").innerHTML = "<H1>Estados Unidos, Japão e Europa.</h1>";
        document.getElementById("resposta_onze").innerHTML = "<H1>Inglaterra, Estados Unidos, URSS e Ásia.</h1>";
        document.getElementById("resposta_doze_errada").innerHTML = "<H1>Itália, Estados Unidos, Japão e Ásia.</h1>";
    }else{
        document.getElementById("resposta_dez").innerHTML = "<H1>Estados Unidos, Japão e Europa.</h1>";
        document.getElementById("resposta_onze").innerHTML = "<H1>Inglaterra, Estados Unidos, URSS e Ásia.</h1>";
        document.getElementById("resposta_doze").innerHTML = "<H1>Itália, Estados Unidos, Japão e Ásia.</h1>";
    }

    if(pegarErroCinco == 1){
        document.getElementById("resposta_treze_errada").innerHTML = "<H1>O não cumprimento do Tratado de Versalhes pela Alemanha.</h1>";
        document.getElementById("resposta_quatorze").innerHTML = "<H1>Assassinato do príncipe herdeiro do trono austríaco Francisco Ferdinando.</h1>";
        document.getElementById("resposta_quinze").innerHTML = "<H1>A Revolução Socialista em 1917 na URSS.</h1>";
    }else if(pegarErroCinco == 3){
        document.getElementById("resposta_treze").innerHTML = "<H1>O não cumprimento do Tratado de Versalhes pela Alemanha.</h1>";
        document.getElementById("resposta_quatorze").innerHTML = "<H1>Assassinato do príncipe herdeiro do trono austríaco Francisco Ferdinando.</h1>";
        document.getElementById("resposta_quinze_errada").innerHTML = "<H1>A Revolução Socialista em 1917 na URSS.</h1>";
    }else{
        document.getElementById("resposta_treze").innerHTML = "<H1>O não cumprimento do Tratado de Versalhes pela Alemanha.</h1>";
        document.getElementById("resposta_quatorze").innerHTML = "<H1>Assassinato do príncipe herdeiro do trono austríaco Francisco Ferdinando.</h1>";
        document.getElementById("resposta_quinze").innerHTML = "<H1>A Revolução Socialista em 1917 na URSS.</h1>";
    }

    if(pegarErroSeis == 1){
        document.getElementById("resposta_dezesseis_errada").innerHTML = "<H1>Porque o Czar Nicolau II morre.</h1>";
        document.getElementById("resposta_dezessete").innerHTML = "<H1>Porque a Rússia foi derrotada pelos alemães.</h1>";
        document.getElementById("resposta_dezoito").innerHTML = "<H1>Porque a Rússia passava por uma revolução socialista.</h1>";
    }else if(pegarErroSeis == 2){
        document.getElementById("resposta_dezesseis").innerHTML = "<H1>Porque o Czar Nicolau II morre.</h1>";
        document.getElementById("resposta_dezessete_errada").innerHTML = "<H1>Porque a Rússia foi derrotada pelos alemães.</h1>";
        document.getElementById("resposta_dezoito").innerHTML = "<H1>Porque a Rússia passava por uma revolução socialista.</h1>";
    }else{
        document.getElementById("resposta_dezesseis").innerHTML = "<H1>Porque o Czar Nicolau II morre.</h1>";
        document.getElementById("resposta_dezessete").innerHTML = "<H1>Porque a Rússia foi derrotada pelos alemães.</h1>";
        document.getElementById("resposta_dezoito").innerHTML = "<H1>Porque a Rússia passava por uma revolução socialista.</h1>";
    }

    if(pegarErroSete == 1){
        document.getElementById("resposta_dezenove_errada").innerHTML = "<H1>Amazonas, Pará, Amapá e Rondônia</h1>";
        document.getElementById("resposta_vinte").innerHTML = "<H1>Amazonas, Roraima, Pará e Amapá</h1>";
        document.getElementById("resposta_vinte_um").innerHTML = "<H1>Pará, Amapá, Roraima e São Paulo</h1>";
    }else if(pegarErroSete == 3){
        document.getElementById("resposta_dezenove").innerHTML = "<H1>Amazonas, Pará, Amapá e Rondônia</h1>";
        document.getElementById("resposta_vinte").innerHTML = "<H1>Amazonas, Roraima, Pará e Amapá</h1>";
        document.getElementById("resposta_vinte_um_errada").innerHTML = "<H1>Pará, Amapá, Roraima e São Paulo</h1>";
    }else{
        document.getElementById("resposta_dezenove").innerHTML = "<H1>Amazonas, Pará, Amapá e Rondônia</h1>";
        document.getElementById("resposta_vinte").innerHTML = "<H1>Amazonas, Roraima, Pará e Amapá</h1>";
        document.getElementById("resposta_vinte_um").innerHTML = "<H1>Pará, Amapá, Roraima e São Paulo</h1>";
    }
    
    if(pegarErroOito == 2){
        document.getElementById("resposta_vinte_dois").innerHTML = "<H1>Antilhas</h1>";
        document.getElementById("resposta_vinte_tres_errada").innerHTML = "<H1>Paraíso</h1>";
        document.getElementById("resposta_vinte_quatro").innerHTML = "<H1>Área de colonização</h1>";
    }else if(pegarErroOito == 3){
        document.getElementById("resposta_vinte_dois").innerHTML = "<H1>Antilhas</h1>";
        document.getElementById("resposta_vinte_tres").innerHTML = "<H1>Paraíso</h1>";
        document.getElementById("resposta_vinte_quatro_errada").innerHTML = "<H1>Área de colonização</h1>";
    }else{
        document.getElementById("resposta_vinte_dois").innerHTML = "<H1>Antilhas</h1>";
        document.getElementById("resposta_vinte_tres").innerHTML = "<H1>Paraíso</h1>";
        document.getElementById("resposta_vinte_quatro").innerHTML = "<H1>Área de colonização</h1>";
    }

    if(pegarErroNove == 1){
        document.getElementById("resposta_vinte_cinco_errada").innerHTML = "<H1>Maceió</h1>";
        document.getElementById("resposta_vinte_seis").innerHTML = "<H1>Palmas</h1>";
        document.getElementById("resposta_vinte_sete").innerHTML = "<H1>Teresina</h1>";
    }else if(pegarErroNove == 3){
        document.getElementById("resposta_vinte_cinco").innerHTML = "<H1>Maceió</h1>";
        document.getElementById("resposta_vinte_seis").innerHTML = "<H1>Palmas</h1>";
        document.getElementById("resposta_vinte_sete_errada").innerHTML = "<H1>Teresina</h1>";
    }else{
        document.getElementById("resposta_vinte_cinco").innerHTML = "<H1>Maceió</h1>";
        document.getElementById("resposta_vinte_seis").innerHTML = "<H1>Palmas</h1>";
        document.getElementById("resposta_vinte_sete").innerHTML = "<H1>Teresina</h1>";
    }


}

/*document.getElementById("mensagemResultado").innerHTML = 
"<h1>Aprovado! Você Tirou <h1>"+ "<h2><\h2>" + pontuacaoFinal; */