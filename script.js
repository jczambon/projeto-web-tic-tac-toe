window.onload = function iniciar() {
    // setar placar 0
    // criar jogadores
    // ?
}

const condiçoes = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
var turno = 0

function delay(tempo) {
    return new Promise(resolve => setTimeout(resolve, tempo))
    //pontuar(turno)
}

function vitoria(sequencia_vitoriosa, tabuleiro) {    
    async function resetar_round(ganhador){
        await delay(2000)
        sequencia_vitoriosa.forEach(botao => botao.style.color = "")
        document.getElementById(ganhador).style.color = ""
        tabuleiro.forEach(botao => {botao.innerText = ""; botao.disabled = false})
    }
    
    if (turno == 0) {
        document.getElementById("jog2").style.color = "green"
        console.log("O") // MOSTRAR VENCEDOR
        resetar_round("jog2")
    } else {
        document.getElementById("jog1").style.color = "green"
        console.log("X")
        resetar_round("jog1")
    }

    tabuleiro.forEach(botao => botao.disabled = true)
    sequencia_vitoriosa.forEach(botao => botao.style.color = "green")
    return true
}

function empate(tabuleiro){
    async function resetar_round(){
        await delay(2000)
        tabuleiro.forEach(botao => {botao.innerText = ""; botao.style.color = ""})
    }

    tabuleiro.forEach(botao => botao.style.color = "red")
    resetar_round()
    
}

function botao_valido(botao) {
    if (botao.innerText == "") {
        return true
    } else {
        return false
    }
}

function checar_condiçoes(botao) {
    this.v = false
    const tabuleiro = Array.from(document.getElementsByClassName("button-option")) //pega os botoes do tabuleiro    

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
                this.v = vitoria(sequencia, tabuleiro)
            }
        })  

        if (this.v == false && tabuleiro.every(botao => botao.innerHTML !== "")){ // se não tem mais espaços e a vitoria aconteceu
            empate(tabuleiro)
        }
    }
}
