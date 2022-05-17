/* document.getElementById('image1').addEventListener('click', trocarFoto)
let imageTroca = document.getElementById('fotoPrincipal')

function trocarFoto (imageTroca) {
    this.style.background-imageurl(imagens/banner2.png);
}

 */
let imagemPrincipal = document.getElementById('meRemova')
console.log(imagemPrincipal)

let imagemInicial = 1;

function trocarImagem (numeroImagem) {
    if(numeroImagem === undefined) {
        if(imagemInicial === 1) {
            imagemInicial = 2;
            imagemPrincipal.src ='imagens/banner2.png'
        }else if (imagemInicial === 2) {
            imagemInicial = 3;
            imagemPrincipal.src ='imagens/D12-2761-002_zoom3.png'
        } else if (imagemInicial === 3) {
            imagemInicial = 1;
            imagemPrincipal.src ='imagens/banner.jpg'
        }else {
            imagemPrincipal.src = `imagens/${numeroImagem}.png`
        }
    }
}
s