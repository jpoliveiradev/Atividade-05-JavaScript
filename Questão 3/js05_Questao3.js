var js_cidadeEstado,  js_nCriancasNasc , js_nObitos, js_nHabitantes, js_taxaNatalidade, js_taxaMortalidade;
var js_opc;

function calcularTaxa() {
    js_cidadeEstado = document.formTaxa.lugar.value;
    js_nCriancasNasc = Number(document.formTaxa.criNascidas.value);
    js_nObitos = Number(document.formTaxa.obitos.value);
    js_nHabitantes = Number(document.formTaxa.habitantes.value);

    js_opc = Number(window.prompt("Escolha uma das opções:" + "\n1- Taxa de Natalidade;" +"\n2- Taxa de Mortalidade."));

    switch (js_opc){
        case 1: js_taxaNatalidade = ((js_nCriancasNasc * 1000) / js_nHabitantes);
        document.write(`<h2> Cidade/estado:  ${js_cidadeEstado} </h2>`);
        document.write(`<h2> Taxa de Natalidade:  ${js_taxaNatalidade} </h2>`); break;
        case 2: js_taxaMortalidade = ((js_nObitos * 1000) / js_nHabitantes);
            document.write(`<h2> Cidade/estado:  ${js_cidadeEstado} </h2>`);
            document.write(`<h2> Taxa de Mortalidade:  ${js_taxaMortalidade} </h2>`); break;
        default : document.write("Tente Novamete!"); break;
    }
}
