import Pessoa from "./Pessoa";

export default class Cliente extends Pessoa {
    
    cartaoDaLoja: boolean;
    limiteCredito: number;

    constructor(id: number, nome: string, email: string, cpf: string, cartaoDaLoja: boolean, limiteCredito: number) {
        super(id, nome, email, cpf);
        this.cartaoDaLoja = cartaoDaLoja;
        this.limiteCredito = limiteCredito;
    }

    public hasCartaoDaLoja(): boolean {
        return this.cartaoDaLoja;
    }

    public setCartaoDaLoja(): void {
        this.cartaoDaLoja = !this.cartaoDaLoja;
    }

    public getLimiteCredito(): number {
        return this.limiteCredito;
    }

    public setLimiteCredito(limiteCredito: number): void {
        this.limiteCredito = limiteCredito;
    }
}