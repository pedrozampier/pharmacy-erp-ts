export default class Pessoa {

    private id: number;
    private nome!: string;
    private email!: string;
    private cpf!: string;

    constructor(id: number, nome: string, email: string, cpf: string) {
        this.id = id;
        this.setNome(nome);
        this.setEmail(email);
        this.setCpf(cpf);
    }

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        let nomeSemEspacos: string = nome.trim();

        if(nomeSemEspacos.length <= 0){
            throw new Error("Nome inválido");
        }

        this.nome = nomeSemEspacos;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        let emailSemEspacos: string = email.trim();

        if(emailSemEspacos.length <= 0){
            throw new Error("Email inválido");
        }

        this.email = emailSemEspacos;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        let cpfSemEspacos: string = cpf.trim();

        if(cpfSemEspacos.length <= 0 || cpfSemEspacos.length != 11){
            throw new Error("CPF inválido");
        }

        this.cpf = cpfSemEspacos;
    }
}