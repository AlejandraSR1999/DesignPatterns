enum Specialties {
    Dental,
    Digestive,
    Ophtalmic,
    Neurological,
    Dermatological,
    Cardiovascular,
    Respiratory,
    Reproductive,
    Urinary
}

interface VeterinaryProcedureRequest{
     petName: string;
     ownerName: string;
     specialty: Specialties;

  }

  abstract class Veterinarian {
    protected nextVeterinarian: Veterinarian;
    abstract name: string;
  
    public setNext(next: Veterinarian): void {
      this.nextVeterinarian = next;
    }
  
    public abstract operate(request: VeterinaryProcedureRequest): void;
  }

  class DentalVeterinarian extends Veterinarian {
    name = 'DentalVeterinarian';
    public operate(request: VeterinaryProcedureRequest): void {
      const { petName, ownerName, specialty } = request;
      if (
        specialty === Specialties.Dental
      ) {
        console.log(
            `${this.name} will operate on the pet patient ${petName} of the owner ${ownerName}. Request approved`
        );
      } else {
        if (this.nextVeterinarian != null) {
          console.log(`${this.name} cannot operate on pet patient ${petName} of the owner ${ownerName}. Passing request to ${this.nextVeterinarian.name}...`
          );
          this.nextVeterinarian.operate(request);
        } else {
          console.log(
            `Could not find a surgeon who specializes in ${specialty}. Request rejected.`
          );
        }
      }
    }
  }


  class DigestionVeterinarian extends Veterinarian {
    name = 'DigestionVeterinarian';
    public operate(request: VeterinaryProcedureRequest): void {
        const { petName, ownerName, specialty } = request;
      if (
        specialty === Specialties.Digestive
      ) {
        console.log(
            `${this.name} will operate on the pet patient ${petName} of the owner ${ownerName}. Request approved`
        );
      } else {
        if (this.nextVeterinarian != null) {
          console.log(
            `${this.name} cannot operate on pet patient ${petName} of the owner ${ownerName}. Passing request to ${this.nextVeterinarian.name}...`
          );
  
          this.nextVeterinarian.operate(request);
        } else {
          console.log(
            `Could not find a surgeon who specializes in ${specialty}. Request rejected.`
          );
        }
      }
    }
  }


  class CardioVeterinarian extends Veterinarian {
    name = 'CardioVeterinarian';
    public operate(request: VeterinaryProcedureRequest): void {
        const { petName, ownerName, specialty } = request;
      if (
        specialty === Specialties.Cardiovascular 
      ) {
        console.log(
            `${this.name} will operate on the pet patient ${petName} of the owner ${ownerName}. Request approved`
        );
      } else {
        if (this.nextVeterinarian != null) {
          console.log(
            `${this.name} cannot operate on pet patient ${petName} of the owner ${ownerName}. Passing request to ${this.nextVeterinarian.name}...`
          );
  
          this.nextVeterinarian.operate(request);
        } else {
          console.log(
            `Could not find a surgeon who specializes in ${specialty}. Request rejected.`
          );
        }
      }
    }
  }

  function main(): void {
    const dentalV = new DentalVeterinarian();
    const digestionV = new DigestionVeterinarian();
    const cardioV = new CardioVeterinarian();

    // chain
    dentalV.setNext(digestionV);
    digestionV.setNext(cardioV);

    const dentalRequest: VeterinaryProcedureRequest = {
        petName: "Jippers",
        ownerName: "Alejandra",
        specialty: Specialties.Dental
    };

    console.log("\n-----dental request-----");
    dentalV.operate(dentalRequest);

    const digestionRequest: VeterinaryProcedureRequest = {
        petName: "Naranjita",
        ownerName: "Isabela",
        specialty: Specialties.Digestive,
    };

    console.log("\n-----digestion request-----");
    digestionV.operate(digestionRequest);
}

main();
