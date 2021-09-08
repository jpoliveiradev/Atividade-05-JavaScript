    var js_nome;
    var js_vlrTotal;
    var js_opcCliente;
    var js_desconto;
    
    function desconto(){
        js_nome = document.getElementById("fm_nome").value;
        js_vlrTotal = document.getElementById("fm_vlrTotal").value;
        js_opc = parseInt(window.prompt("Escolha Uma Das Opções: \n" + "1- Cliente Comum;\n" + "2- Funcionário; \n" + "3- Cliente Vip."));

        switch (js_opc){
            case 1: document.write("<h2>" + "Olá " +js_nome+ "</h2>");
                document.write("<h2>" + "Valor total da compra: " + js_vlrTotal + "</h2>");
                document.write("<h2> Percentual: Cliente comum não tem desconto. </h2>"); break;

            case 2: js_desconto =(js_vlrTotal * 10) /100;
                document.write("<h2>" + "Olá " +js_nome+ "</h2>");
                document.write("<h2>" + "Valor total da compra: " + js_vlrTotal + "</h2>");
                document.write("<h2>" + "Percentual: Funcionário = 10%" + "</h2>");
                document.write("<h2>" + "Valor total com desconto: " + (js_vlrTotal - js_desconto) + "</h2>"); break;

            case 3:js_desconto =(js_vlrTotal * 5) /100
                document.write("<h2>" + "Olá " +js_nome+ "</h2>");
                document.write("<h2>" + "Valor total da compra: " + js_vlrTotal + "</h2>");
                document.write("<h2>" + "Percentual: Cliente Vip = 5%" + "</h2>");
                document.write("<h2>" + "Valor total com desconto: " + (js_vlrTotal - js_desconto) + "</h2>"); break;

            default: document.write("Erro Tente Novamente!");

        }    
    }