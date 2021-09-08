    var js_dia;
    var js_mes;
    var js_ano;

    function date() {
        js_dia = parseInt(document.formCalend.fm_dia.value);
        js_mes = parseInt(document.formCalend.fm_mes.value);
        js_ano = parseInt(document.formCalend.fm_ano.value); 

        switch (js_mes) {
            case 1 : document.write("<h2>" + "Data: " +js_dia+ " de Janeiro do ano de " + js_ano + "</h2>"); break;
            case 2 : document.write("<h2>" + "Data: " +js_dia+ " de Fevereiro do ano de " + js_ano + "</h2>"); break;
            case 3 : document.write("<h2>" + "Data: " +js_dia+ " de Marco do ano de " + js_ano + "</h2>"); break;
            case 4 : document.write("<h2>" + "Data: " +js_dia+ " de Abril do ano de " + js_ano + "</h2>"); break;
            case 5 : document.write("<h2>" + "Data: " +js_dia+ " de Maio do ano de " + js_ano + "</h2>"); break;
            case 6 : document.write("<h2>" + "Data: " +js_dia+ " de Junho do ano de " + js_ano + "</h2>"); break;
            case 7 : document.write("<h2>" + "Data: " +js_dia+ " de Julho do ano de " + js_ano + "</h2>"); break;
            case 8 : document.write("<h2>" + "Data: " +js_dia+ " de Agosto do ano de " + js_ano + "</h2>"); break;
            case 9 : document.write("<h2>" + "Data: " +js_dia+ " de Setembro do ano de " + js_ano + "</h2>"); break;
            case 10 : document.write("<h2>" + "Data: " +js_dia+ " de Outubro do ano de " + js_ano + "</h2>"); break;
            case 11 : document.write("<h2>" + "Data: " +js_dia+ " de Novembro do ano de " + js_ano + "</h2>"); break;
            case 12 : document.write("<h2>" + "Data: " +js_dia+ " de Dezembro do ano de " + js_ano + "</h2>"); break;
            default : document.write("<h2> Data Inválida </h2>"); break;
        } 
    }