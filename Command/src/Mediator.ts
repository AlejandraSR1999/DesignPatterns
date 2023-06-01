import promptSync from 'prompt-sync';

const prompt = promptSync();
export interface Mediator {
    sendMessage(message: string): void;
    receiveMessage(): string;
  }
  
export class ConcreteMediator implements Mediator {
    private messages: string[] = [];
  
    sendMessage(message: string) {
      this.messages.push(message);
      console.log(`Chatbot: ${message}`);
    }
  
    receiveMessage(): string {
        const message = prompt("You: ");
        if (message !== null) {
          this.messages.push(message);
        }
        return message || "";
      }
      
  }