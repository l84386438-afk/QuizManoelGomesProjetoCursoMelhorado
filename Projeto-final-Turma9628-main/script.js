let botao_comecar = document.getElementById("comecar")
let botao_acertou_1 = document.getElementById("acertou_1")
let botao_acertou_2 = document.getElementById("acertou_2")
let botao_acertou_3 = document.getElementById("acertou_3")
let botao_acertou_4 = document.getElementById("acertou_4")
let botao_acertou_5 = document.getElementById("acertou_5")
let botao_voltar = document.getElementById("voltar")
let botoes_errou  = document.getElementsByClassName("errou")

if (botao_comecar) {
    botao_comecar.addEventListener("click", ()=> {
        window.location.href="quiz1.html"
    })
}

if (botao_acertou_1) {

    botao_acertou_1.addEventListener("click", ()=> {
        window.location.href="quiz2.html"
    })
}

if (botao_acertou_2) {

    botao_acertou_2.addEventListener("click", ()=> {
        window.location.href="quiz3.html"
    })
}

if (botao_acertou_3) {

    botao_acertou_3.addEventListener("click", ()=> {
        window.location.href="quiz4.html"
    })
}

if (botao_acertou_4) {

    botao_acertou_4.addEventListener("click", ()=> {
        window.location.href="quiz5.html"
    })
}

if (botao_acertou_5) {

    botao_acertou_5.addEventListener("click", ()=> {
        window.location.href="parabens.html"
    })
}

if (botao_voltar) {

    botao_voltar.addEventListener("click", ()=> {
        window.location.href="index.html"
    })
}

for (let botao of botoes_errou) {
    botao.addEventListener("click", () => {
        window.location.href = "errou.html";
    });
}
 
