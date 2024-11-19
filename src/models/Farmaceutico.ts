import Pessoa from "./Pessoa";

export default class Farmaceutico extends Pessoa {
    
    crf!: string;
    salario: number;

    constructor(id: number, nome: string, email: string, cpf: string, crf: string, salario: number) {
        super(id, nome, email, cpf);
        this.setCrf(crf);
        this.salario = salario;
    }

    public getCrf(): string {
        return this.crf;
    }

    public setCrf(crf: string): void {
        let crfSemEspacos: string = crf.trim();

        if(crfSemEspacos.length <= 0){
            throw new Error("CRF inválido");
        }

        this.crf = crfSemEspacos;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setSalario(salario: number): void {
        this.salario = salario;
    }
}