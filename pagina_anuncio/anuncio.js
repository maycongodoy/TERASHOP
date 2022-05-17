/* document.getElementById('image1').addEventListener('click', trocarFoto)
let imageTroca = document.getElementById('fotoPrincipal')

function trocarFoto (imageTroca) {
    this.style.background-imageurl(imagens/banner2.png);
}

 */
let imagemPrincipal = document.getElementById('meRemova')
console.log(imagemPrincipal)

let imagemInicial = 1;

function trocar (numeroImagem) {
    console.log(numeroImagem)
        imagemPrincipal.src = numeroImagem
       
}
