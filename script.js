window.onload = function iniciar() {
    // setar placar 0
    // criar jogadores
    // ?
}

const condiçoes = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
var turno = 0

function checar_condiçoes(botao) {
    const tabuleiro = Array.from(document.getElementsByClassName("button-option")) //pega os botoes do tabuleiro

    const vitoria = function(sequencia) {
        if (turno == 0) {
            console.log("O") // MOSTRAR VENCEDOR
        } else {
            console.log("X")
        }
        tabuleiro.forEach(botao => botao.setAttribute("onclick", ""))
        sequencia.forEach(botao => botao.style.color = "red")

        //pontuar(turno)

    }

    const botao_valido = function(botao) {
        if (botao.innerText == "") {
            return true
        } else {
            return false
        }
    }

    if (botao_valido(botao)) {          // checa se o lugar é valido
        if (turno == 0) {
            botao.innerText = "X"
            turno = 1
        } else {
            botao.innerText = "O"
            turno = 0
        }


        condiçoes.forEach(combinaçao => {  // a partir das combinação, pega o index dela no tabuleiro e checa se sao todos iguais
            sequencia = [tabuleiro[combinaçao[0]], tabuleiro[combinaçao[1]], tabuleiro[combinaçao[2]]]

            if (sequencia.every(botao => botao.innerText === sequencia[0].innerText && botao.innerText !== "")) {
                vitoria(sequencia)
            }
        }
        )

    }
}
