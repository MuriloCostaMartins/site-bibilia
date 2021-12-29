let api = `https://www.abibliadigital.com.br/api/verses/nvi/random`;
let request = new XMLHttpRequest();
request.open('GET', api);
request.onload = () => {
    let textos = JSON.parse(request.responseText);

    //Vesiculos
    let versiculo = document.querySelector('#title-verse');

    let tituloVersiculo = `${textos.book.name} ${textos.chapter}:${textos.number}`;
    versiculo.innerHTML = tituloVersiculo;

    // Texto
    let verso = document.querySelector('#text-verse');
    verso.innerHTML = textos.text;
};
request.send();
let url = `https://www.abibliadigital.com.br/api/verses/search`
function btnSearch(){
    let searchInput = document.getElementById('btn-search-input');
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

    var data = `{
    "version": "nvi",
    "search": "${searchInput}"
    }`;

    xhr.send(data);
}