const condiçoes = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

function iniciar() {
    const jogador1 = new Jogador(nome1)
    const jogador2 = new Jogador(nome2)
    const jogo = new Jogo(jogador1, jogador2)
}


class Jogo {
    constructor(jogador1, jogador2){
        this.placar = new Placar(jogador1, jogador2)
        this.turno = 0
    }


    botao_valido(botao) {
        if (botao.value == "") {
            return true
        }
        return false
    }

    checar_condiçoes(botao){
        if (this.botao_valido(botao)) {
            if (this.turno == 0) {
                botao.innerText  = "X"
                this.turno = 1
            } else {
                botao.innerText  = "O"
                this.turno = 0
            }
        }

        const tabuleiro = Array.from(document.getElementsByClassName("button-option"))

        for (combinaçao in condiçoes) {
            sequencia = [tabuleiro[combinaçao[0]], tabuleiro[combinaçao[1]], tabuleiro[combinaçao[2]]]
            if (sequencia.every(botao => botao.innerText === sequencia[0].innerText && botao.innerText !== "")){
                this.vitoria()
            }
        }
        
        this.trocar_turno()
    }

    vitoria() {
        if (this.turno == 0){
            //X ganhou
        } else {
            //O ganhou
        }
    }


    trocar_turno() {

    }

    pontuar(jogador) {
        
    }


}

