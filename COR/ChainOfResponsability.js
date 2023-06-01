var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Specialties;
(function (Specialties) {
    Specialties[Specialties["Dental"] = 0] = "Dental";
    Specialties[Specialties["Digestive"] = 1] = "Digestive";
    Specialties[Specialties["Ophtalmic"] = 2] = "Ophtalmic";
    Specialties[Specialties["Neurological"] = 3] = "Neurological";
    Specialties[Specialties["Dermatological"] = 4] = "Dermatological";
    Specialties[Specialties["Cardiovascular"] = 5] = "Cardiovascular";
    Specialties[Specialties["Respiratory"] = 6] = "Respiratory";
    Specialties[Specialties["Reproductive"] = 7] = "Reproductive";
    Specialties[Specialties["Urinary"] = 8] = "Urinary";
})(Specialties || (Specialties = {}));
var Veterinarian = /** @class */ (function () {
    function Veterinarian() {
    }
    Veterinarian.prototype.setNext = function (next) {
        this.nextVeterinarian = next;
    };
    return Veterinarian;
}());
var DentalVeterinarian = /** @class */ (function (_super) {
    __extends(DentalVeterinarian, _super);
    function DentalVeterinarian() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'DentalVeterinarian';
        return _this;
    }
    DentalVeterinarian.prototype.operate = function (request) {
        var petName = request.petName, ownerName = request.ownerName, specialty = request.specialty;
        if (specialty === Specialties.Dental) {
            console.log("".concat(this.name, " will operate on the pet patient ").concat(petName, " of the owner ").concat(ownerName, ". Request approved"));
        }
        else {
            if (this.nextVeterinarian != null) {
                console.log("".concat(this.name, " cannot operate on pet patient ").concat(petName, " of the owner ").concat(ownerName, ". Passing request to ").concat(this.nextVeterinarian.name, "..."));
                this.nextVeterinarian.operate(request);
            }
            else {
                console.log("Could not find a surgeon who specializes in ".concat(specialty, ". Request rejected."));
            }
        }
    };
    return DentalVeterinarian;
}(Veterinarian));
var DigestionVeterinarian = /** @class */ (function (_super) {
    __extends(DigestionVeterinarian, _super);
    function DigestionVeterinarian() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'DigestionVeterinarian';
        return _this;
    }
    DigestionVeterinarian.prototype.operate = function (request) {
        var petName = request.petName, ownerName = request.ownerName, specialty = request.specialty;
        if (specialty === Specialties.Digestive) {
            console.log("".concat(this.name, " will operate on the pet patient ").concat(petName, " of the owner ").concat(ownerName, ". Request approved"));
        }
        else {
            if (this.nextVeterinarian != null) {
                console.log("".concat(this.name, " cannot operate on pet patient ").concat(petName, " of the owner ").concat(ownerName, ". Passing request to ").concat(this.nextVeterinarian.name, "..."));
                this.nextVeterinarian.operate(request);
            }
            else {
                console.log("Could not find a surgeon who specializes in ".concat(specialty, ". Request rejected."));
            }
        }
    };
    return DigestionVeterinarian;
}(Veterinarian));
var CardioVeterinarian = /** @class */ (function (_super) {
    __extends(CardioVeterinarian, _super);
    function CardioVeterinarian() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'CardioVeterinarian';
        return _this;
    }
    CardioVeterinarian.prototype.operate = function (request) {
        var petName = request.petName, ownerName = request.ownerName, specialty = request.specialty;
        if (specialty === Specialties.Cardiovascular) {
            console.log("".concat(this.name, " will operate on the pet patient ").concat(petName, " of the owner ").concat(ownerName, ". Request approved"));
        }
        else {
            if (this.nextVeterinarian != null) {
                console.log("".concat(this.name, " cannot operate on pet patient ").concat(petName, " of the owner ").concat(ownerName, ". Passing request to ").concat(this.nextVeterinarian.name, "..."));
                this.nextVeterinarian.operate(request);
            }
            else {
                console.log("Could not find a surgeon who specializes in ".concat(specialty, ". Request rejected."));
            }
        }
    };
    return CardioVeterinarian;
}(Veterinarian));
function main() {
    var dentalV = new DentalVeterinarian();
    var digestionV = new DigestionVeterinarian();
    var cardioV = new CardioVeterinarian();
    // chain
    dentalV.setNext(digestionV);
    digestionV.setNext(cardioV);
    var dentalRequest = {
        petName: "Jippers",
        ownerName: "Alejandra",
        specialty: Specialties.Dental
    };
    console.log("\n-----dental request-----");
    dentalV.operate(dentalRequest);
    var digestionRequest = {
        petName: "Naranjita",
        ownerName: "Isabela",
        specialty: Specialties.Digestive,
    };
    console.log("\n-----digestion request-----");
    digestionV.operate(digestionRequest);
}
