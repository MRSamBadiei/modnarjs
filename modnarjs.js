"use strict";
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
exports.__esModule = true;
exports.country = exports.net = exports.card = exports.phone = exports.color = exports.animal = exports.name = void 0;
var name_1 = require("./src/names/name");
/*
import {
  adjective,
  adverb,
  noun,
  preposition,
  verb,
  subject_pronouns,
  object_pronouns,
  possessive_adjectives,
  possessive_pronouns,
} from "./src/Words/words";
*/
var domain_1 = require("./src/net/domain");
var country_1 = require("./src/country/country");
var animal_1 = require("./src/animals/animal");
// test funcs
function log(param) {
    console.log(param);
}
//
var Randomly = /** @class */ (function () {
    function Randomly() {
        this.MALE = "MALE";
        this.FEMALE = "FEMALE";
        this.PHONE_DEFAULT = "+1-###-555-####";
        this.DATE = new Date();
        // Words
        /*
        protected verb(): string {
          return verb[this.rnd(verb)];
        }
        protected noun(): string {
          return noun[this.rnd(noun)];
        }
        protected preposition(): string {
          return preposition[this.rnd(preposition)];
        }
        protected adverb(): string {
          return adverb[this.rnd(adverb)];
        }
        protected adjective(): string {
          return adjective[this.rnd(adjective)];
        }
        protected subjectPronouns(): string {
          return subject_pronouns[this.rnd(subject_pronouns)];
        }
        protected objectPronouns(): string {
          return object_pronouns[this.rnd(object_pronouns)];
        }
        protected possessiveAdjectives(): string {
          return possessive_adjectives[this.rnd(possessive_adjectives)];
        }
        protected possessivePronouns(): string {
          return possessive_pronouns[this.rnd(possessive_pronouns)];
        }
        */
    }
    // DEFAULT FUNCS
    // * rnd random array index
    Randomly.prototype.rnd = function (arr) {
        return Math.floor(Math.random() * (arr.length - 1));
    };
    // rnd number
    Randomly.prototype.numRnd = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    // name
    Randomly.prototype.createName = function (gender, start, end) {
        var listOfNames = gender === this.MALE ? name_1.m : name_1.f;
        if (start !== undefined || end !== undefined) {
            var reg_1 = new RegExp("^".concat(start !== null && start !== void 0 ? start : "", ".*").concat(end !== null && end !== void 0 ? end : "", "$"), "ig");
            var arr_1 = [];
            listOfNames.forEach(function (value, index) {
                if (reg_1.test(value)) {
                    arr_1.push(index);
                }
            });
            var index = Math.floor(Math.random() * (arr_1.length - 1));
            arr_1.length > 0 ? "" : console.log("ERROR: NO MATCH FOUND");
            return arr_1.length > 0 ? listOfNames[arr_1[index]] : "";
        }
        else {
            var index = gender === this.MALE
                ? Math.floor(Math.random() * (name_1.m.length - 1))
                : Math.floor(Math.random() * (name_1.f.length - 1));
            return listOfNames[index];
        }
    };
    Randomly.prototype.createLastname = function (start, end) {
        if (start !== undefined || end !== undefined) {
            var reg_2 = new RegExp("^".concat(start !== null && start !== void 0 ? start : "", ".*").concat(end !== null && end !== void 0 ? end : "", "$"), "ig");
            var arr_2 = [];
            name_1.l.forEach(function (value, index) {
                if (reg_2.test(value)) {
                    arr_2.push(index);
                }
            });
            var index = Math.floor(Math.random() * (arr_2.length - 1));
            arr_2.length > 0 ? "" : console.log("ERROR: NO MATCH FOUND");
            return arr_2.length > 0 ? name_1.l[arr_2[index]] : "";
        }
        else {
            var index = Math.floor(Math.random() * (name_1.l.length - 1));
            return name_1.l[index];
        }
    };
    Randomly.prototype.createGender = function () {
        var rnd = Math.round(Math.random());
        return rnd == 0 ? this.MALE : this.FEMALE;
    };
    // animal
    Randomly.prototype.createAnimalName = function () {
        var index = Math.floor(Math.random() * (animal_1.animals.length - 1));
        return animal_1.animals[index];
    };
    // color
    Randomly.prototype.rgb = function () {
        var rgb = {
            r: Math.floor(Math.random() * 255),
            g: Math.floor(Math.random() * 255),
            b: Math.floor(Math.random() * 255)
        };
        return rgb;
    };
    Randomly.prototype.hex = function () {
        return Math.floor(Math.random() * 16777215).toString(16);
    };
    Randomly.prototype.createColor = function (format) {
        switch (format.toUpperCase()) {
            case "RGB":
                var rgb = this.rgb();
                return [rgb.r, rgb.g, rgb.b];
            case "RGBA":
                var rgba = this.rgb();
                var a = Math.random().toFixed(2);
                return [rgba.r, rgba.g, rgba.b, parseFloat(a)];
            case "HEX":
                return this.hex();
            default:
                break;
        }
    };
    // phone
    Randomly.prototype.createPhone = function (format) {
        var result = "";
        for (var i = 0; i < format.length; i++) {
            if (format[i] === "#") {
                result += this.numRnd(0, 9);
                continue;
            }
            result += format[i];
        }
        return result;
    };
    return Randomly;
}());
var Name = /** @class */ (function (_super) {
    __extends(Name, _super);
    function Name() {
        return _super.call(this) || this;
    }
    /**
     *
     * @param data - is a object contains
     * {
     * name?: string | undefined,
     * gender?: string | undefined,
     * start?: string | undefined,
     * end?: string | undefined
     * }
     * @returns string
     */
    Name.prototype.fName = function (data) {
        var _a, _b;
        var _start = (_a = data === null || data === void 0 ? void 0 : data.start) !== null && _a !== void 0 ? _a : undefined;
        var _end = (_b = data === null || data === void 0 ? void 0 : data.end) !== null && _b !== void 0 ? _b : undefined;
        var _gender = (data === null || data === void 0 ? void 0 : data.gender) !== undefined ? data === null || data === void 0 ? void 0 : data.gender : this.createGender();
        var _name = (data === null || data === void 0 ? void 0 : data.name) !== undefined
            ? data.name
            : this.createName(_gender, _start, _end);
        return _name.toLowerCase();
    };
    /**
     *
     * @param data - is a object contains
     * {
     * name?: string | undefined,
     * start?: string | undefined,
     * end?: string | undefined
     * }
     * @returns string
     */
    Name.prototype.lName = function (data) {
        var _a, _b;
        var _start = (_a = data === null || data === void 0 ? void 0 : data.start) !== null && _a !== void 0 ? _a : undefined;
        var _end = (_b = data === null || data === void 0 ? void 0 : data.end) !== null && _b !== void 0 ? _b : undefined;
        var _name = (data === null || data === void 0 ? void 0 : data.name) !== undefined ? data.name : this.createLastname(_start, _end);
        return _name.toLowerCase();
    };
    /**
     *
     * @param gender
     * @type {?string}
     * @returns string
     */
    Name.prototype.prefix = function (gender) {
        var result = gender !== undefined
            ? gender === this.MALE
                ? "Mr."
                : "Ms."
            : this.createGender() === this.MALE
                ? "Mr."
                : "Ms.";
        return result;
    };
    return Name;
}(Randomly));
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal() {
        return _super.call(this) || this;
    }
    /**
     *
     * @returns string
     */
    Animal.prototype.kind = function () {
        return this.createAnimalName();
    };
    return Animal;
}(Randomly));
var Color = /** @class */ (function (_super) {
    __extends(Color, _super);
    function Color() {
        return _super.call(this) || this;
    }
    /**
     *
     * @param format
     * @type {?string}
     * @returns number[] | undefined | string
     */
    Color.prototype.color = function (format) {
        return format !== undefined
            ? this.createColor(format)
            : this.createColor("RGB");
    };
    return Color;
}(Randomly));
var Phone = /** @class */ (function (_super) {
    __extends(Phone, _super);
    function Phone() {
        return _super.call(this) || this;
    }
    /**
     *
     * @param format
     * @type {?string}
     * @returns string
     */
    Phone.prototype.phone = function (format) {
        return format !== undefined
            ? this.createPhone(format)
            : this.createPhone(this.PHONE_DEFAULT);
    };
    return Phone;
}(Randomly));
var Sentence = /** @class */ (function (_super) {
    __extends(Sentence, _super);
    function Sentence() {
        return _super.call(this) || this;
    }
    // test
    Sentence.prototype.simple = function () {
        //return `${this.subjectPronouns()} ${this.verb()} icrecream`;
        return "this is not working yet :)";
    };
    return Sentence;
}(Randomly));
var CreditCard = /** @class */ (function (_super) {
    __extends(CreditCard, _super);
    function CreditCard(options) {
        var _this = this;
        var _a;
        _this = _super.call(this) || this;
        _this.DEFAULT = {
            cvvLength: 3
        };
        _this.VISA_START = "4";
        _this.AMEX_START = ["34", "37"];
        _this.MASTER_START = ["51", "52", "53", "54", "55"];
        _this.DEFAULT.cvvLength = (_a = options === null || options === void 0 ? void 0 : options.cvvLength) !== null && _a !== void 0 ? _a : 3;
        _this.DEFAULT.cvvLength = Math.floor(_this.DEFAULT.cvvLength);
        return _this;
    }
    CreditCard.prototype.creditNumber = function (type) {
        var result = type;
        while (result.length < 15) {
            var rnd = this.numRnd(0, 9);
            result += rnd.toString();
        }
        var checksum = this.isValid(result);
        result += checksum.isValid ? "0" : checksum.needToBeValid;
        return parseInt(result);
    };
    CreditCard.prototype.holder = function () {
        return "".concat(this.fName({}), " ").concat(this.lName({}));
    };
    CreditCard.prototype.expire = function () {
        var d = Math.floor(Math.random() * 30) + 1;
        var y = (this.DATE.getFullYear() + Math.floor(Math.random() * 5)).toString();
        return "".concat(d, "/").concat(y[2]).concat(y[3]);
    };
    CreditCard.prototype.cvv = function (length) {
        if (length === void 0) { length = this.DEFAULT.cvvLength; }
        var min = Math.pow(10, (length - 1)), max = Math.pow(10, length) - 1;
        return this.numRnd(min, max);
    };
    /**
     *
     * @returns object
     */
    CreditCard.prototype.visaCard = function () {
        return {
            creditNumber: this.creditNumber(this.VISA_START),
            cvv: this.cvv(),
            holder: this.holder(),
            expire: this.expire()
        };
    };
    /**
     *
     * @returns object
     */
    CreditCard.prototype.masterCard = function () {
        return {
            creditNumber: this.creditNumber(this.MASTER_START[this.numRnd(0, this.MASTER_START.length)]),
            cvv: this.cvv(),
            holder: this.holder(),
            expire: this.expire()
        };
    };
    /**
     *
     * @returns object
     */
    CreditCard.prototype.amexCard = function () {
        return {
            creditNumber: this.creditNumber(this.AMEX_START[this.numRnd(0, this.AMEX_START.length)]),
            cvv: this.cvv(),
            holder: this.holder(),
            expire: this.expire()
        };
    };
    // luhn algorithm
    /**
     * @param creaditCardNumber
     * @type {!string}
     * @returns object
     */
    CreditCard.prototype.isValid = function (creaditCardNumber) {
        var result = [];
        var length = creaditCardNumber.length;
        var final = 0;
        var i = 0;
        // step 1
        while (i < length) {
            if ((i + 1) % 2 !== 0) {
                result[i] = (parseInt(creaditCardNumber[i]) * 2).toString();
                i++;
                continue;
            }
            result[i] = creaditCardNumber[i];
            i++;
        }
        // step 2
        i = 0;
        while (i < length) {
            if (result[i].length === 2) {
                result[i] = (parseInt(result[i][0]) + parseInt(result[i][1])).toString();
            }
            final += parseInt(result[i]);
            i++;
        }
        return final % 10 === 0
            ? { isValid: true, needToBeValid: undefined }
            : { isValid: false, needToBeValid: (10 - (final % 10)).toString() };
    };
    return CreditCard;
}(Name));
var Net = /** @class */ (function (_super) {
    __extends(Net, _super);
    function Net() {
        var _this = _super.call(this) || this;
        _this.provider = [
            "gmail.com",
            "yahoo.com",
            "hotmail.com",
            "msn.com",
            "outlook.com",
            "live.com",
            "me.com",
            "aol.com",
            "mac.com",
        ];
        return _this;
    }
    Net.prototype.classTypeNum = function (classType) {
        switch (classType.toUpperCase()) {
            case "A":
                return "".concat(this.numRnd(1, 127));
            case "B":
                return "".concat(this.numRnd(128, 191));
            case "C":
                return "".concat(this.numRnd(192, 223));
            case "D":
                return "".concat(this.numRnd(224, 239));
            case "E":
                return "".concat(this.numRnd(240, 255));
            default:
                return "ERROR: WRONG CLASS";
        }
    };
    Net.prototype.email = function (data) {
        var _a, _b, _c, _d;
        var firstName = (_a = data === null || data === void 0 ? void 0 : data.firstName) !== null && _a !== void 0 ? _a : this.fName();
        var lastName = (_b = data === null || data === void 0 ? void 0 : data.lastName) !== null && _b !== void 0 ? _b : this.lName();
        var company = (_c = data === null || data === void 0 ? void 0 : data.company) !== null && _c !== void 0 ? _c : this.provider[this.rnd(this.provider)];
        var chars = (_d = data === null || data === void 0 ? void 0 : data.useSpecialChar) !== null && _d !== void 0 ? _d : false;
        return "".concat(firstName).concat(lastName, "@").concat(company, ".com");
    };
    /**
     *
     * @param classType - A,B,C,D,E
     * @type {?string}
     * @returns string
     */
    Net.prototype.ipv4 = function (classType) {
        return classType !== undefined
            ? "".concat(this.classTypeNum(classType), ".").concat(this.numRnd(0, 255), ".").concat(this.numRnd(0, 255), ".").concat(this.numRnd(1, 255))
            : "".concat(this.numRnd(0, 255), ".").concat(this.numRnd(0, 255), ".").concat(this.numRnd(0, 255), ".").concat(this.numRnd(0, 255));
    };
    /**
     * 1487 top-level domains
     * @returns string
     */
    Net.prototype.domain = function () {
        return domain_1.domain_arr[this.rnd(domain_1.domain_arr)].toLowerCase();
    };
    return Net;
}(Name));
var Country = /** @class */ (function (_super) {
    __extends(Country, _super);
    function Country() {
        return _super.call(this) || this;
    }
    Country.prototype.country = function () {
        return country_1.country_arr[this.rnd(country_1.country_arr)];
    };
    return Country;
}(Randomly));
var name = new Name();
exports.name = name;
var animal = new Animal();
exports.animal = animal;
var color = new Color();
exports.color = color;
var phone = new Phone();
exports.phone = phone;
//const sentence = new Sentence();
var card = new CreditCard();
exports.card = card;
var net = new Net();
exports.net = net;
var country = new Country();
exports.country = country;
