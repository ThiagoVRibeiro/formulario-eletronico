function montarGabarito(){
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
        document.getElementById("resposta_dez").innerHTML = "<H1>Estados Unidos, Jap??o e Europa.</h1>";
        document.getElementById("resposta_onze_errada").innerHTML = "<H1>Inglaterra, Estados Unidos, URSS e ??sia.</h1>";
        document.getElementById("resposta_doze").innerHTML = "<H1>It??lia, Estados Unidos, Jap??o e ??sia.</h1>";
    }else if(pegarErroQuatro == 3){
        document.getElementById("resposta_dez").innerHTML = "<H1>Estados Unidos, Jap??o e Europa.</h1>";
        document.getElementById("resposta_onze").innerHTML = "<H1>Inglaterra, Estados Unidos, URSS e ??sia.</h1>";
        document.getElementById("resposta_doze_errada").innerHTML = "<H1>It??lia, Estados Unidos, Jap??o e ??sia.</h1>";
    }else{
        document.getElementById("resposta_dez").innerHTML = "<H1>Estados Unidos, Jap??o e Europa.</h1>";
        document.getElementById("resposta_onze").innerHTML = "<H1>Inglaterra, Estados Unidos, URSS e ??sia.</h1>";
        document.getElementById("resposta_doze").innerHTML = "<H1>It??lia, Estados Unidos, Jap??o e ??sia.</h1>";
    }

    if(pegarErroCinco == 1){
        document.getElementById("resposta_treze_errada").innerHTML = "<H1>O n??o cumprimento do Tratado de Versalhes pela Alemanha.</h1>";
        document.getElementById("resposta_quatorze").innerHTML = "<H1>Assassinato do pr??ncipe herdeiro do trono austr??aco Francisco Ferdinando.</h1>";
        document.getElementById("resposta_quinze").innerHTML = "<H1>A Revolu????o Socialista em 1917 na URSS.</h1>";
    }else if(pegarErroCinco == 3){
        document.getElementById("resposta_treze").innerHTML = "<H1>O n??o cumprimento do Tratado de Versalhes pela Alemanha.</h1>";
        document.getElementById("resposta_quatorze").innerHTML = "<H1>Assassinato do pr??ncipe herdeiro do trono austr??aco Francisco Ferdinando.</h1>";
        document.getElementById("resposta_quinze_errada").innerHTML = "<H1>A Revolu????o Socialista em 1917 na URSS.</h1>";
    }else{
        document.getElementById("resposta_treze").innerHTML = "<H1>O n??o cumprimento do Tratado de Versalhes pela Alemanha.</h1>";
        document.getElementById("resposta_quatorze").innerHTML = "<H1>Assassinato do pr??ncipe herdeiro do trono austr??aco Francisco Ferdinando.</h1>";
        document.getElementById("resposta_quinze").innerHTML = "<H1>A Revolu????o Socialista em 1917 na URSS.</h1>";
    }

    if(pegarErroSeis == 1){
        document.getElementById("resposta_dezesseis_errada").innerHTML = "<H1>Porque o Czar Nicolau II morre.</h1>";
        document.getElementById("resposta_dezessete").innerHTML = "<H1>Porque a R??ssia foi derrotada pelos alem??es.</h1>";
        document.getElementById("resposta_dezoito").innerHTML = "<H1>Porque a R??ssia passava por uma revolu????o socialista.</h1>";
    }else if(pegarErroSeis == 2){
        document.getElementById("resposta_dezesseis").innerHTML = "<H1>Porque o Czar Nicolau II morre.</h1>";
        document.getElementById("resposta_dezessete_errada").innerHTML = "<H1>Porque a R??ssia foi derrotada pelos alem??es.</h1>";
        document.getElementById("resposta_dezoito").innerHTML = "<H1>Porque a R??ssia passava por uma revolu????o socialista.</h1>";
    }else{
        document.getElementById("resposta_dezesseis").innerHTML = "<H1>Porque o Czar Nicolau II morre.</h1>";
        document.getElementById("resposta_dezessete").innerHTML = "<H1>Porque a R??ssia foi derrotada pelos alem??es.</h1>";
        document.getElementById("resposta_dezoito").innerHTML = "<H1>Porque a R??ssia passava por uma revolu????o socialista.</h1>";
    }

    if(pegarErroSete == 1){
        document.getElementById("resposta_dezenove_errada").innerHTML = "<H1>Amazonas, Par??, Amap?? e Rond??nia</h1>";
        document.getElementById("resposta_vinte").innerHTML = "<H1>Amazonas, Roraima, Par?? e Amap??</h1>";
        document.getElementById("resposta_vinte_um").innerHTML = "<H1>Par??, Amap??, Roraima e S??o Paulo</h1>";
    }else if(pegarErroSete == 3){
        document.getElementById("resposta_dezenove").innerHTML = "<H1>Amazonas, Par??, Amap?? e Rond??nia</h1>";
        document.getElementById("resposta_vinte").innerHTML = "<H1>Amazonas, Roraima, Par?? e Amap??</h1>";
        document.getElementById("resposta_vinte_um_errada").innerHTML = "<H1>Par??, Amap??, Roraima e S??o Paulo</h1>";
    }else{
        document.getElementById("resposta_dezenove").innerHTML = "<H1>Amazonas, Par??, Amap?? e Rond??nia</h1>";
        document.getElementById("resposta_vinte").innerHTML = "<H1>Amazonas, Roraima, Par?? e Amap??</h1>";
        document.getElementById("resposta_vinte_um").innerHTML = "<H1>Par??, Amap??, Roraima e S??o Paulo</h1>";
    }
    
    if(pegarErroOito == 2){
        document.getElementById("resposta_vinte_dois").innerHTML = "<H1>Antilhas</h1>";
        document.getElementById("resposta_vinte_tres_errada").innerHTML = "<H1>Para??so</h1>";
        document.getElementById("resposta_vinte_quatro").innerHTML = "<H1>??rea de coloniza????o</h1>";
    }else if(pegarErroOito == 3){
        document.getElementById("resposta_vinte_dois").innerHTML = "<H1>Antilhas</h1>";
        document.getElementById("resposta_vinte_tres").innerHTML = "<H1>Para??so</h1>";
        document.getElementById("resposta_vinte_quatro_errada").innerHTML = "<H1>??rea de coloniza????o</h1>";
    }else{
        document.getElementById("resposta_vinte_dois").innerHTML = "<H1>Antilhas</h1>";
        document.getElementById("resposta_vinte_tres").innerHTML = "<H1>Para??so</h1>";
        document.getElementById("resposta_vinte_quatro").innerHTML = "<H1>??rea de coloniza????o</h1>";
    }

    if(pegarErroNove == 1){
        document.getElementById("resposta_vinte_cinco_errada").innerHTML = "<H1>Macei??</h1>";
        document.getElementById("resposta_vinte_seis").innerHTML = "<H1>Palmas</h1>";
        document.getElementById("resposta_vinte_sete").innerHTML = "<H1>Teresina</h1>";
    }else if(pegarErroNove == 3){
        document.getElementById("resposta_vinte_cinco").innerHTML = "<H1>Macei??</h1>";
        document.getElementById("resposta_vinte_seis").innerHTML = "<H1>Palmas</h1>";
        document.getElementById("resposta_vinte_sete_errada").innerHTML = "<H1>Teresina</h1>";
    }else{
        document.getElementById("resposta_vinte_cinco").innerHTML = "<H1>Macei??</h1>";
        document.getElementById("resposta_vinte_seis").innerHTML = "<H1>Palmas</h1>";
        document.getElementById("resposta_vinte_sete").innerHTML = "<H1>Teresina</h1>";
    }
}