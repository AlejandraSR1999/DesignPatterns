"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteMediator = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class ConcreteMediator {
    constructor() {
        this.messages = [];
    }
    sendMessage(message) {
        this.messages.push(message);
        console.log(`Chatbot: ${message}`);
    }
    receiveMessage() {
        const message = prompt("You: ");
        if (message !== null) {
            this.messages.push(message);
        }
        return message || "";
    }
}
exports.ConcreteMediator = ConcreteMediator;
