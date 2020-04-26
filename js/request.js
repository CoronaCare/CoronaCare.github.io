import { domainToUnicode } from "url";

var ajax = new XMLHttpRequest();

ajax.open("GET", "https://sheetsu.com/apis/v1.0bu/5ad00517d72b")

ajax.responseType = "json";

ajax.send();

$.ajax({
    type: "POST",
    url: 'https://sheetsu.com/apis/v1.0bu/5ad00517d72b',
    data: novaLinha,
    success: processarDadosPlanilha
});

var novaLinha = {
    ideia: 'INSIRA AQUI SUA IDEIA',
    categoria: 'exemplo'
};    

function processarDadosPlanilha(data){
    console.log('Dados inseridos com sucesso');
}

ajax.addEventListener("readystatechange", function(){

    if(ajax.readyState === 4 && ajax.status === 200){
        console.log(ajax.response);
    }

    var resposta = ajax.response;
    var corpo_tabela = document.querySelector("#ajudantes")

    for (const item of resposta) {
        var linha = document.createElement("tr");
        var c_nome = document.createElement("td");
        var c_email = document.createElement("td");
        var c_telefone = document.createElement("td");
        var c_endereco = document.createElement("td");
         var text_nome = document.createTextNode(item.nome)
         var text_email = document.createTextNode(item.email)
         var text_telefone = document.createTextNode(item.data)
         var text_endereco = document.createTextNode(item.voce)
     
         c_nome.appendChild(text_nome);
         c_email.appendChild(text_email);
         c_telefone.appendChild(text_telefone);
         c_endereco.appendChild(text_endereco);

         linha.appendChild(c_nome)
         linha.appendChild(c_email)
         linha.appendChild(c_telefone)
         linha.appendChild(c_endereco)

         corpo_tabela.innerHTML += linha
    }

});