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
var name_1 = require("./src/names/name");
var words_1 = require("./src/words/words");
var domain_1 = require("./src/net/domain");
var country_1 = require("./src/country/country");
var animal_1 = require("./src/animals/animal");
var typeError = function (name, data, type) {
    console.error("(".concat(name, ") Type Error, ").concat(data, " is not a ").concat(type, "."));
};
var Randomly = /** @class */ (function () {
    function Randomly() {
        this.MALE = "MALE";
        this.FEMALE = "FEMALE";
        this.PHONE_DEFAULT = "+1-###-555-####";
        this.DATE = new Date();
        this.DAYS = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ];
        this.MONTHS = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        this.WORDS_LENGTH = words_1.words.length;
        this.NAME_CFG = {
            F_NAME: name_1.f,
            M_NAME: name_1.m,
            LAST_NAME: name_1.l
        };
        this.LOREM_CFG = {
            WordsPerSentence: {
                min: 4,
                max: 16
            },
            sentencesPerParagraph: {
                min: 4,
                max: 8
            }
        };
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
        var listOfNames = gender === this.MALE ? this.NAME_CFG.M_NAME : this.NAME_CFG.F_NAME;
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
        return listOfNames[this.rnd(listOfNames)];
    };
    Randomly.prototype.createLastname = function (start, end) {
        if (start !== undefined || end !== undefined) {
            var reg_2 = new RegExp("^".concat(start !== null && start !== void 0 ? start : "", ".*").concat(end !== null && end !== void 0 ? end : "", "$"), "ig");
            var arr_2 = [];
            this.NAME_CFG.LAST_NAME.forEach(function (value, index) {
                if (reg_2.test(value)) {
                    arr_2.push(index);
                }
            });
            var index = Math.floor(Math.random() * (arr_2.length - 1));
            arr_2.length > 0 ? "" : console.log("ERROR: NO MATCH FOUND");
            return arr_2.length > 0 ? this.NAME_CFG.LAST_NAME[arr_2[index]] : "";
        }
        return this.NAME_CFG.LAST_NAME[this.rnd(this.NAME_CFG.LAST_NAME)];
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
    Randomly.prototype.createNumberWithFormat = function (format) {
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
     * @param data - contains F_NAME, M_NAME, L_NAME
     * @F_Name array of female names
     * @M_Name array of male names
     * @L_Name array of last names
     */
    Name.prototype.config = function (data) {
        var _a, _b, _c;
        this.NAME_CFG.F_NAME = (_a = data.F_NAME) !== null && _a !== void 0 ? _a : name_1.f;
        this.NAME_CFG.M_NAME = (_b = data.M_NAME) !== null && _b !== void 0 ? _b : name_1.m;
        this.NAME_CFG.LAST_NAME = (_c = data.LAST_NAME) !== null && _c !== void 0 ? _c : name_1.l;
    };
    /**
     *
     * @param data
     * @type {name?: string | undefined, gender?: string | undefined,
     * start?: string | undefined, end?: string | undefined
     * }
     * @returns string
     */
    Name.prototype.fName = function (data) {
        var _a, _b;
        /* Error handeling */
        if ((data === null || data === void 0 ? void 0 : data.start) && typeof (data === null || data === void 0 ? void 0 : data.start) !== "string") {
            typeError("start", data === null || data === void 0 ? void 0 : data.start, "string");
            return "";
        }
        if ((data === null || data === void 0 ? void 0 : data.end) && typeof (data === null || data === void 0 ? void 0 : data.end) !== "string") {
            typeError("end", data === null || data === void 0 ? void 0 : data.end, "string");
            return "";
        }
        if ((data === null || data === void 0 ? void 0 : data.name) && typeof (data === null || data === void 0 ? void 0 : data.name) !== "string") {
            typeError("name", data === null || data === void 0 ? void 0 : data.name, "string");
            return "";
        }
        if ((data === null || data === void 0 ? void 0 : data.gender) && typeof (data === null || data === void 0 ? void 0 : data.gender) !== "string") {
            typeError("gender", data === null || data === void 0 ? void 0 : data.gender, "string");
            return "";
        }
        //
        var _start = (_a = data === null || data === void 0 ? void 0 : data.start) !== null && _a !== void 0 ? _a : undefined;
        var _end = (_b = data === null || data === void 0 ? void 0 : data.end) !== null && _b !== void 0 ? _b : undefined;
        var _gender = (data === null || data === void 0 ? void 0 : data.gender) !== undefined
            ? data === null || data === void 0 ? void 0 : data.gender.toUpperCase()
            : this.createGender();
        var _name = (data === null || data === void 0 ? void 0 : data.name) !== undefined
            ? data.name
            : this.createName(_gender, _start, _end);
        return _name.toLowerCase();
    };
    /**
     *
     * @param data - is a object contains
     * @type {name?: string | undefined, start?: string | undefined, end?: string | undefined
     * }
     * @returns string
     */
    Name.prototype.lName = function (data) {
        var _a, _b;
        /* Error handeling */
        if ((data === null || data === void 0 ? void 0 : data.start) && typeof (data === null || data === void 0 ? void 0 : data.start) !== "string") {
            typeError("start", data === null || data === void 0 ? void 0 : data.start, "string");
            return "";
        }
        if ((data === null || data === void 0 ? void 0 : data.end) && typeof (data === null || data === void 0 ? void 0 : data.end) !== "string") {
            typeError("end", data === null || data === void 0 ? void 0 : data.end, "string");
            return "";
        }
        if ((data === null || data === void 0 ? void 0 : data.name) && typeof (data === null || data === void 0 ? void 0 : data.name) !== "string") {
            typeError("name", data === null || data === void 0 ? void 0 : data.name, "string");
            return "";
        }
        //
        var _start = (_a = data === null || data === void 0 ? void 0 : data.start) !== null && _a !== void 0 ? _a : undefined;
        var _end = (_b = data === null || data === void 0 ? void 0 : data.end) !== null && _b !== void 0 ? _b : undefined;
        var _name = (data === null || data === void 0 ? void 0 : data.name) !== undefined ? data.name : this.createLastname(_start, _end);
        return _name.toLowerCase();
    };
    /**
     *
     * @param gender - "male" or "female"
     * @type ?string
     * @returns string
     */
    Name.prototype.prefix = function (gender) {
        if (!gender) {
            return this.createGender() === this.MALE ? "Mr." : "Ms.";
        }
        if (gender && typeof gender !== "string") {
            typeError("gender", gender, "string");
            return "";
        }
        if ((gender === null || gender === void 0 ? void 0 : gender.toUpperCase()) === this.MALE ||
            (gender === null || gender === void 0 ? void 0 : gender.toUpperCase()) === this.FEMALE) {
            return gender.toUpperCase() === this.MALE ? "Mr." : "Ms.";
        }
        else {
            console.error("(gender) Should be MALE or FEMALE, " + gender + " is not.");
            return "";
        }
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
     * @type ?string
     * @returns number[] | undefined | string
     */
    Color.prototype.color = function (format) {
        if (!format) {
            return this.createColor("RGB");
        }
        if (format && typeof format !== "string") {
            typeError("format", format, "string");
            return "";
        }
        if (format.toUpperCase() === "RGB" ||
            format.toUpperCase() === "RGBA" ||
            format.toUpperCase() === "HEX") {
            return this.createColor(format);
        }
        else {
            console.error("(format) Should be RGB, RGBA, HEX , " + format + " is not.");
            return "";
        }
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
     * @type ?string
     * @returns string
     */
    Phone.prototype.phone = function (format) {
        if (!format) {
            return this.createNumberWithFormat(this.PHONE_DEFAULT);
        }
        if (format && typeof format !== "string") {
            typeError("format", format, "string");
            return "";
        }
        return this.createNumberWithFormat(format);
    };
    return Phone;
}(Randomly));
var Lorem = /** @class */ (function (_super) {
    __extends(Lorem, _super);
    function Lorem() {
        return _super.call(this) || this;
    }
    /**
     *
     * @param data
     * @type {WPS?: {min?: number, max?: number}, SPP?: {min?: number, max?: number}}
     */
    Lorem.prototype.config = function (data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.LOREM_CFG.WordsPerSentence.min =
            (_b = (_a = data.WPS) === null || _a === void 0 ? void 0 : _a.min) !== null && _b !== void 0 ? _b : this.LOREM_CFG.WordsPerSentence.min;
        this.LOREM_CFG.WordsPerSentence.max =
            (_d = (_c = data.WPS) === null || _c === void 0 ? void 0 : _c.max) !== null && _d !== void 0 ? _d : this.LOREM_CFG.WordsPerSentence.max;
        this.LOREM_CFG.sentencesPerParagraph.min =
            (_f = (_e = data.SPP) === null || _e === void 0 ? void 0 : _e.min) !== null && _f !== void 0 ? _f : this.LOREM_CFG.sentencesPerParagraph.min;
        this.LOREM_CFG.sentencesPerParagraph.max =
            (_h = (_g = data.SPP) === null || _g === void 0 ? void 0 : _g.max) !== null && _h !== void 0 ? _h : this.LOREM_CFG.sentencesPerParagraph.max;
    };
    Lorem.prototype.method1 = function (length) {
        var _result = "";
        var _start = this.numRnd(0, words_1.words.length);
        var _end = _start + length;
        while (_start < _end) {
            _result += "".concat(words_1.words[_start], " ");
            _start++;
        }
        return _result.slice(0, -1) + ".";
    };
    Lorem.prototype.method2 = function (length) {
        var _result = "";
        var i = 0;
        while (i < length) {
            _result += "".concat(words_1.words[this.rnd(words_1.words)], " ");
            i++;
        }
        return _result.slice(0, -1) + ".";
    };
    Lorem.prototype.lorem = function (words) {
        return words > this.WORDS_LENGTH
            ? this.method2(words)
            : this.method1(words);
    };
    /**
     *
     * @param sentences
     * @type !number
     * @returns string
     */
    Lorem.prototype.sentences = function (sentences) {
        if (typeof sentences !== "number") {
            typeError("sentences", sentences, "number");
            return "";
        }
        var _result = "";
        var _i = 0;
        var _end = this.numRnd(this.LOREM_CFG.WordsPerSentence.min, this.LOREM_CFG.WordsPerSentence.max);
        while (_i < sentences) {
            _result += this.lorem(_end) + " ";
            _i++;
        }
        return _result;
    };
    /**
     *
     * @param paragraphs
     * @type !number
     * @returns string
     */
    Lorem.prototype.paragraphs = function (paragraphs) {
        if (typeof paragraphs !== "number") {
            typeError("paragraphs", paragraphs, "number");
            return "";
        }
        var _result = "";
        var _i = 0;
        var _end = this.numRnd(this.LOREM_CFG.sentencesPerParagraph.min, this.LOREM_CFG.sentencesPerParagraph.max);
        while (_i < paragraphs) {
            _result += this.sentences(_end);
            _i++;
        }
        return _result;
    };
    return Lorem;
}(Randomly));
var CreditCard = /** @class */ (function (_super) {
    __extends(CreditCard, _super);
    function CreditCard() {
        var _this = _super.call(this) || this;
        _this.DEFAULT = {
            cvvLength: 3
        };
        _this.VISA_START = "4";
        _this.AMEX_START = ["34", "37"];
        _this.MASTER_START = ["51", "52", "53", "54", "55"];
        return _this;
    }
    CreditCard.prototype.creditNumber = function (type) {
        var result = type;
        while (result.length < 15) {
            var rnd = this.numRnd(0, 9);
            result += rnd.toString();
        }
        var checksum = this.isValid(result);
        result += checksum.isValid ? "0" : checksum.checksum;
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
            name: "Visa",
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
            name: "Master",
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
            name: "Amex",
            creditNumber: this.creditNumber(this.AMEX_START[this.numRnd(0, this.AMEX_START.length)]),
            cvv: this.cvv(),
            holder: this.holder(),
            expire: this.expire()
        };
    };
    // luhn algorithm
    /**
     * @param creaditCardNumber
     * @type !string
     * @returns object
     */
    CreditCard.prototype.isValid = function (creaditCardNumber) {
        if (typeof creaditCardNumber !== "string") {
            typeError("creaditCardNumber", creaditCardNumber, "string");
            return { checksum: undefined, isValid: false };
        }
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
            ? { isValid: true, checksum: undefined }
            : { isValid: false, checksum: (10 - (final % 10)).toString() };
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
    // https://stackoverflow.com/questions/41914224/email-generator-javascript
    Net.prototype.emailMethods = function (num, fn, ln, company) {
        switch (num) {
            case 1:
                return fn + "@" + company;
            case 2:
                return fn + "." + ln + "@" + company;
            case 3:
                return fn + ln + "@" + company;
            case 4:
                return fn.charAt(0) + ln + "@" + company;
            case 5:
                return fn.charAt(0) + "." + ln + "@" + company;
            case 6:
                return fn + ln.charAt(0) + "@" + company;
            case 7:
                return fn + "." + ln.charAt(0) + "@" + company;
            case 8:
                return fn.charAt(0) + ln.charAt(0) + "@" + company;
            case 9:
                return fn + "_" + ln + "@" + company;
            case 10:
                return fn.charAt(0) + "_" + ln + "@" + company;
            case 11:
                return ln + fn + "@" + company;
            case 12:
                return ln + "." + fn + "@" + company;
            case 13:
                return ln + fn.charAt(0) + "@" + company;
            case 14:
                return ln + "." + fn.charAt(0) + "@" + company;
            default:
                return "error";
        }
    };
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
    /**
     *
     * @param data
     * @type {firstName?: string; lastName?: string; company?: string;}
     * @returns string
     */
    Net.prototype.email = function (data) {
        var _a, _b, _c;
        /* Error handeling */
        if ((data === null || data === void 0 ? void 0 : data.firstName) && typeof (data === null || data === void 0 ? void 0 : data.firstName) !== "string") {
            typeError("firstName", data === null || data === void 0 ? void 0 : data.firstName, "string");
            return "";
        }
        if ((data === null || data === void 0 ? void 0 : data.lastName) && typeof (data === null || data === void 0 ? void 0 : data.lastName) !== "string") {
            typeError("lastName", data === null || data === void 0 ? void 0 : data.lastName, "string");
            return "";
        }
        if ((data === null || data === void 0 ? void 0 : data.company) && typeof (data === null || data === void 0 ? void 0 : data.company) !== "string") {
            typeError("company", data === null || data === void 0 ? void 0 : data.company, "string");
            return "";
        }
        var firstName = (_a = data === null || data === void 0 ? void 0 : data.firstName) !== null && _a !== void 0 ? _a : this.fName();
        var lastName = (_b = data === null || data === void 0 ? void 0 : data.lastName) !== null && _b !== void 0 ? _b : this.lName();
        var company = (_c = data === null || data === void 0 ? void 0 : data.company) !== null && _c !== void 0 ? _c : this.provider[this.rnd(this.provider)];
        return this.emailMethods(this.numRnd(1, 14), firstName, lastName, company);
    };
    /**
     *
     * @param classType - 'A', 'B', 'C', 'D', 'E'
     * @type ?string
     * @returns string
     */
    Net.prototype.ipv4 = function (classType) {
        if (classType && typeof classType !== "string") {
            typeError("classType", classType, "string");
            return "";
        }
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
var Number = /** @class */ (function (_super) {
    __extends(Number, _super);
    function Number() {
        var _this = _super.call(this) || this;
        _this.DEFAULTS = {
            min: 1,
            max: 1000,
            int: "INT",
            float: "FLOAT"
        };
        return _this;
    }
    /**
     *
     * @param data
     * @type {min?: number = 1, max?: number = 1000, decimal?: number = 2 }
     * @returns number
     */
    Number.prototype.float = function (data) {
        var _a, _b, _c;
        if ((data === null || data === void 0 ? void 0 : data.max) && typeof (data === null || data === void 0 ? void 0 : data.max) !== "number") {
            typeError("max", data === null || data === void 0 ? void 0 : data.max, "number");
            return 0;
        }
        if ((data === null || data === void 0 ? void 0 : data.min) && typeof (data === null || data === void 0 ? void 0 : data.min) !== "number") {
            typeError("min", data === null || data === void 0 ? void 0 : data.min, "number");
            return 0;
        }
        if ((data === null || data === void 0 ? void 0 : data.decimal) && typeof (data === null || data === void 0 ? void 0 : data.decimal) !== "number") {
            typeError("decimal", data === null || data === void 0 ? void 0 : data.decimal, "number");
            return 0;
        }
        var _min = (_a = data === null || data === void 0 ? void 0 : data.min) !== null && _a !== void 0 ? _a : this.DEFAULTS.min;
        var _max = (_b = data === null || data === void 0 ? void 0 : data.max) !== null && _b !== void 0 ? _b : this.DEFAULTS.max;
        var _decimal = (_c = data === null || data === void 0 ? void 0 : data.decimal) !== null && _c !== void 0 ? _c : 2;
        return parseFloat((Math.random() * (_max - _min) + _min).toFixed(_decimal));
    };
    /**
     *
     * @param data
     * @type {min?: number = 1, max?: number = 1000}
     * @returns number
     */
    Number.prototype.int = function (data) {
        var _a, _b;
        if ((data === null || data === void 0 ? void 0 : data.max) && typeof (data === null || data === void 0 ? void 0 : data.max) !== "number") {
            typeError("max", data === null || data === void 0 ? void 0 : data.max, "number");
            return 0;
        }
        if ((data === null || data === void 0 ? void 0 : data.min) && typeof (data === null || data === void 0 ? void 0 : data.min) !== "number") {
            typeError("min", data === null || data === void 0 ? void 0 : data.min, "number");
            return 0;
        }
        var _min = (_a = data === null || data === void 0 ? void 0 : data.min) !== null && _a !== void 0 ? _a : this.DEFAULTS.min;
        var _max = (_b = data === null || data === void 0 ? void 0 : data.max) !== null && _b !== void 0 ? _b : this.DEFAULTS.max;
        return this.numRnd(_min, _max);
    };
    /**
     *
     * @param data
     * @type {min?: number = 1, max?: number = 1000,decimal?: number; type: string; length: number;}
     * @returns number
     */
    Number.prototype.array = function (data) {
        if (!data.length) {
            console.error("(length) can not be undefined");
            return [];
        }
        if (!data.type) {
            console.error("(type) can not be undefined");
            return [];
        }
        if (data.max && typeof data.max !== "number") {
            typeError("max", data.max, "number");
            return [];
        }
        if (data.min && typeof data.min !== "number") {
            typeError("min", data.min, "number");
            return [];
        }
        if (data.decimal && typeof data.decimal !== "number") {
            typeError("decimal", data.decimal, "number");
            return [];
        }
        if (data.length && typeof data.length !== "number") {
            typeError("length", data.length, "number");
            return [];
        }
        if (data.type && typeof data.type !== "string") {
            typeError("type", data.type, "string");
            return [];
        }
        var arr = [];
        var type = data === null || data === void 0 ? void 0 : data.type.toUpperCase();
        switch (type) {
            case this.DEFAULTS.int:
                for (var i = 0; i < data.length; i++) {
                    arr[i] = this.int({ min: data.min, max: data.max });
                }
                break;
            case this.DEFAULTS.float:
                for (var i = 0; i < data.length; i++) {
                    arr[i] = this.float({
                        min: data.min,
                        max: data.max,
                        decimal: data.decimal
                    });
                }
                break;
        }
        return arr;
    };
    return Number;
}(Randomly));
var Rdate = /** @class */ (function (_super) {
    __extends(Rdate, _super);
    function Rdate() {
        return _super.call(this) || this;
    }
    /**
     *
     * @returns string
     */
    Rdate.prototype.day = function () {
        return this.DAYS[this.rnd(this.DAYS)];
    };
    /**
     *
     * @returns string
     */
    Rdate.prototype.month = function () {
        return this.MONTHS[this.rnd(this.MONTHS)];
    };
    return Rdate;
}(Randomly));
var modnarjs = {
    name: new Name(),
    animal: new Animal(),
    color: new Color(),
    phone: new Phone(),
    card: new CreditCard(),
    net: new Net(),
    country: new Country(),
    number: new Number(),
    lorem: new Lorem(),
    date: new Rdate()
};
module.exports = modnarjs;
