import Cliente from "./models/Cliente";
import Farmaceutico from "./models/Farmaceutico";
import Pessoa from "./models/Pessoa";
import Produto from "./models/Produto";
import Remedio from "./models/Remedio";
import Venda from "./models/Venda";

//let pessoa = new Pessoa(1, "João", "joao@gmail.com", "12345678900");
let cliente = new Cliente(1, "Jonas", "joao@gmail.com", "12345678900", true, 1000);
let farmaceutico = new Farmaceutico(1, "Jonas", "joao@gmail.com", "12345678900", "234-0", 1500);

let produto = new Produto(1, "Desodorante", 10);
let remedio = new Remedio(1, "Dipirona", 5, true);

let venda = new Venda(1, new Date(), farmaceutico, cliente);

venda.addProduto(produto);
venda.addProduto(remedio);

console.log(venda.getProdutos());
console.log(venda.getValorDaVenda());