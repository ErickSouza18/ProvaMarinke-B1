var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PaymentRepository } from "../repositories/payment-repository.js";
export class PaymentService {
    constructor() {
        this.paymentRepository = new PaymentRepository();
    }
    createPayment(jobId, operationDate, paymentValue) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.paymentRepository.create({ jobId, operationDate, paymentValue });
            }
            catch (error) {
                throw new Error(`Impossível criar pagamento: ${error.message}`);
            }
        });
    }
    getAllPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.paymentRepository.findAll();
            }
            catch (error) {
                throw new Error(`Impossível encontrar pagamentos: ${error.message}`);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.paymentRepository.findById(id);
            }
            catch (error) {
                throw new Error(`Impossível encontrar pagamento pelo ID ${id}: ${error.message}`);
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.paymentRepository.update(id, data);
            }
            catch (error) {
                throw new Error(`Impossível atualizar pagamento: ${error.message}`);
            }
        });
    }
    deletePayment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.paymentRepository.delete(id);
            }
            catch (error) {
                throw new Error(`Impossível excluir pagamento com ID ${id}: ${error.message}`);
            }
        });
    }
}