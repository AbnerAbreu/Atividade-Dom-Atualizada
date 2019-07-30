


// function mostrarPosição(event) {
//     if (event.pageY >= 1220 || event.pageX >= 10) {
//         console.log("Esta na pagina");
//     }
//     else{
//          alert("Deseja mesmo sair desta página");
//         }
// }
// window.onmousemove = mostrarPosição;

let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let texto = document.querySelector("p");
let naoSou = document.querySelector("a");
let dn = document.querySelector("h3");
let div = document.querySelector("div");
let section = document.querySelector("section");

if(localStorage.nome){
    div.style.display="none";
    section.style.display="initial";
    texto.innerHTML=`Seja bem vindo ${localStorage.nome}`;
    naoSou.innerHTML=`Não sou ${localStorage.nome};`
}
else{
    function acessar(){
        div.style.display="initial";
        localStorage.setItem("nome", caixaTexto.value);
        if(localStorage.nome){
            div.style.display="none";
            section.style.display="initial";
            texto.innerHTML=`Seja bem vindo ${localStorage.nome}`;
            naoSou.innerHTML=`Não sou ${localStorage.nome};`
        }
    }
}

function limpar(){
    localStorage.removeItem('nome');
}

botao.onclick = acessar;
naoSou.onclick = limpar;


