window.onload = function iniciar() {
    let contador1 = 0
    let contador2 = 0
    placar = document.getElementsByClassName("div-placar")[0]
    placar.innerHTML = contador1 + ' x ' + contador2

    // criar jogadores
    // ?
}

const condiçoes = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
var turno = 0

let contador1 = 0
let contador2 = 0
let placar = document.getElementsByClassName("div-placar")[0]

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
        this.mudar_placar(0)
        resetar_round("jog2")
    } else {
        document.getElementById("jog1").style.color = "green"
        console.log("X")
        this.mudar_placar(1)
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

function mudar_placar(n_jogador){
    if (n_jogador == 1){
        contador1 += 1;
    } else if (n_jogador == 0) {
        contador2 += 1;
    } else {
        contador1 = 0;
        contador2 = 0;
    }
    placar.innerHTML = contador1 + ' x ' + contador2;

}   


function altera_nome_o(){
    let jogadoro = document.getElementById("jogador o");
    let nome = prompt("Digite o nome do jogador O:", jogadoro.innerHTML);
    if (nome != null) {
        jogadoro.innerHTML = nome;
      }
}


function altera_nome_x(){
    let jogadorx = document.getElementById("jogador x");
    let nome = prompt("Digite o nome do jogador X:", jogadorx.innerHTML);
    if (nome != null) {
      jogadorx.innerHTML = nome;
    }
}