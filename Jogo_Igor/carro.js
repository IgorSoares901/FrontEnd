function Carro(cor, velocMaxima){
    this.cor = cor;
    this.velocMaxima = velocMaxima;
    this.velocAtual = 0;
}
// função construtora

Carro.prototype = {
    acelerar: function(){
        this.velocAtual += 10;
    }
}