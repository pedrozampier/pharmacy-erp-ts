export default class Produto {

    private id: number;
    private nome!: string;
    private preco!: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.setNome(nome);
        this.setPreco(preco);
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

    public getPreco(): number {
        return this.preco;
    }

    public setPreco(preco: number): void {
        if(preco <= 0){
            throw new Error("Preço inválido");
        }

        this.preco = preco;
    }
}