import Remedio from '../models/Remedio';
import { Tarja } from '../models/Tarja';


describe('Remedio', () => {
    let remedio: Remedio;

    beforeEach(() => {
        remedio = new Remedio(1, 'Paracetamol', 10.0, true, Tarja.VERMELHA);
    });

    test('should create an instance of Remedio', () => {
        expect(remedio).toBeInstanceOf(Remedio);
    });

    test('should return correct receitaObrigatoria value', () => {
        expect(remedio.isReceitaObrigatoria()).toBe(true);
    });

    test('should toggle receitaObrigatoria value', () => {
        remedio.setReceitaObrigatoria();
        expect(remedio.isReceitaObrigatoria()).toBe(false);
        remedio.setReceitaObrigatoria();
        expect(remedio.isReceitaObrigatoria()).toBe(true);
    });

    test('should return correct descricao', () => {
        const descricao = remedio.getDescricao();
        expect(descricao).toBe('Remédio: Paracetamol, Preço: 10.00, Receita Obrigatória: Sim, Tarja: Vermelha');
    });

    test('should log correct descarte message', () => {
        console.log = jest.fn();
        remedio.descarte();
        expect(console.log).toHaveBeenCalledWith('Produto não reciclavel, descarte somente em locais autorizados');
    });
});