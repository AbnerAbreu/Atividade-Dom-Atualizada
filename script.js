


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

if(localStorage.Nome){
    texto.innerHTML = `seja bem vindo ${localStorage.Nome}`;
    localStorage.setItem('Nome', caixaTexto.value);
    naoSou.innerHTML = `Não é ${localStorage.Nome}?`;
    caixaTexto.style.display = "none";
    dn.style.display = "none";
    botao.style.display = "none";
}
else{
    texto.innerHTML = `seja bem vindo ${localStorage.Nome}`;
    localStorage.setItem('Nome', caixaTexto.value);
    naoSou.innerHTML = `Não é ${localStorage.Nome}?`;
    function acessar()
}
function limpar(){
    localStorage.clear();
}

botao.onclick = acessar;
naoSou.onclick = limpar;


