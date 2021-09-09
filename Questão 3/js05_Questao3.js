var js_cidadeEstado;
var js_nCriancasNasc;
var js_nObitos;
var js_nHabitantes;
var js_taxaNatalidade;
var js_taxaMortalidade;
var js_opc;

function calcularTaxa() {
    js_cidadeEstado = document.taxaNeM.fm_city.value;
    js_nCriancasNasc = parseInt(document.taxaNeM.fm_nCriancasNasc.value);
    js_nObitos = parseInt(document.taxaNeM.fm_nObitos.value);
    js_nHabitantes = parseInt(document.taxaNeM.fm_nHabitantes.value);

    js_opc = parseInt(window.prompt("Escolha uma das opções:" + "\n1- Taxa de Natalidade;" +"\n2- Taxa de Mortalidade."));

    switch (js_opc){
        case 1: js_taxaNatalidade = ((js_nCriancasNasc * 1000) / js_nHabitantes);
            document.write("<h2>" + "Cidade/estado: " +js_cidadeEstado+ "</h2>");
            document.write("<h2>" + "Taxa de Natalidade: " +js_taxaNatalidade+ "</h2>"); break;
        case 2: js_taxaMortalidade = ((js_nObitos * 1000) / js_nHabitantes);
            document.write("<h2>" + "Cidade/estado: " +js_cidadeEstado+ "</h2>");
            document.write("<h2>" + "Taxa de Mortalidade: " +js_taxaMortalidade+ "</h2>"); break;
        default : document.write("Tente Novamete!"); break;
    }
}