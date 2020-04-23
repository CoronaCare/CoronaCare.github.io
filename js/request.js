var ajax = new XMLHttpRequest();

ajax.open("GET", "https://sheetsu.com/apis/v1.0bu/5ad00517d72b")

ajax.responseType = "json";

ajax.send();

ajax.addEventListener("readystatechange", function(){

    if(ajax.readyState === 4 && ajax.status === 200){
        console.log(ajax.response);
    }

    var resposta = ajax.response;
    var lista = document.querySelector("#ajudantes")
    var qtd = 0

    for (const item of resposta) {
    
        lista.innerHTML += "<tr>"
        lista.innerHTML += "<th scope='row'>"+ qtd +"</th>";
        lista.innerHTML += "<td>" + item.nome + "</td>";
        lista.innerHTML += "<td>" + item.email + "</td>";
        lista.innerHTML += "<td>" + item.data + "</td>";
        lista.innerHTML += "</tr>"

        qtd++
    }

});