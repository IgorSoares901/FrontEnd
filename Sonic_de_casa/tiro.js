function Tiro(context, imagem) {
    this.context = context;
    this.imagem = imagem;
    this.x = 0;
    this.y = 0;
    this.velocidadeX = 0;
    this.sheet = new Spritesheet(context, imagem, 1, 5);
this.sheet.intervalo = 100;
}

Tiro.prototype = {
    atualizar: function() {
        this.x += this.velocidadeX;
        if (this.sheet.coluna < 4) {
      this.sheet.proximoQuadro();
    }
  },
    desenhar: function() {
        this.sheet.desenhar(this.x, this.y);
    }
};