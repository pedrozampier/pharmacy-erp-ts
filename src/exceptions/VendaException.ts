export default class VendaException extends Error {
    constructor() {
        super('A data de venda não pode ser retroativa');
    }
}