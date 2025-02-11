import { RemedioRepository } from "../repositories/RemedioRepository";
import { Tarja } from "../models/Tarja";
import { AppDataSource } from "../config/data-source";

const main = async () => {
  await AppDataSource.initialize();

  const remedioRepo = new RemedioRepository();

  const remedio = await remedioRepo.create({
    nome: "Paracetamol",
    preco: 15.99,
    receitaObrigatoria: true,
    tarja: Tarja.VERMELHA,
  });
  console.log("Novo remédio:", remedio);

  console.log("Lista de remédios:", await remedioRepo.getAll());

  const atualizado = await remedioRepo.update(remedio.id, { preco: 19.99 });
  console.log("Remédio atualizado:", atualizado);

  console.log("Buscar remédio:", await remedioRepo.getById(remedio.id));

  console.log("Remédio deletado:", await remedioRepo.delete(remedio.id));
};

main().catch((error) => console.log(error));
