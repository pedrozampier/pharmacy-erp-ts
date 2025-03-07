import promptSync from "prompt-sync";

export default class TelaMenu{

    private prompt = promptSync();

    exibirMenuPrincipal() {

        console.log('==== Kolpier ERP Farmácia ====');
    
        let escolha = this.prompt('Escolha uma opção: \n1 - Gerenciar Clientes \n2 - Gerenciar Vendas \n3 - Sair \n ');

        switch (escolha) {
            case '1':
                console.log('Gerenciar Clientes');
                break;
            case '2':
                console.log('Gerenciar Vendas');
                break;
            case '3':
                console.log('Saindo...');
                process.exit();
            default:
                console.log('Opção inválida!');
                //this.exibirMenuPrincipal();
        }
    }
}
