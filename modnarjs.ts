import { m, f, l } from "./src/names/name";
import { words } from "./src/words/words";
import { domain_arr } from "./src/net/domain";
import { country_arr } from "./src/country/country";
import { animals } from "./src/animals/animal";
import {
  I_Name_Lname,
  I_Name_Fname,
  I_Card_Visa,
  strUnd,
  arrNum,
  arrStr,
  I_Color_RGB,
  I_Card_Visa_Valid,
  I_Card_Default,
  I_Net_Email,
  I_Number_Float,
  I_Number_Int,
  I_NAME_CFG,
  I_NAME_CFG_U,
  I_Number_Array,
  I_Lorem_Config,
} from "./types/type";

// test funcs
function log(param: any): void {
  console.log(param);
}
//
class Randomly {
  protected readonly MALE: string = "MALE";
  protected readonly FEMALE: string = "FEMALE";
  protected readonly PHONE_DEFAULT: string = "+1-###-555-####";
  protected readonly DATE: Date = new Date();
  protected readonly DAYS: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  protected readonly MONTHS: string[] = [
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
  protected readonly WORDS_LENGTH: number = words.length;
  protected NAME_CFG: I_NAME_CFG = {
    F_NAME: f,
    M_NAME: m,
    LAST_NAME: l,
  };
  protected LOREM_CFG = {
    WordsPerSentence: {
      min: 4,
      max: 16,
    },
    sentencesPerParagraph: {
      min: 4,
      max: 8,
    },
  };
  // DEFAULT FUNCS
  // * rnd random array index
  protected rnd(arr: arrStr): number {
    return Math.floor(Math.random() * (arr.length - 1));
  }
  // rnd number
  protected numRnd(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
  // name
  protected createName(gender: string, start: strUnd, end: strUnd): string {
    const listOfNames: arrStr =
      gender === this.MALE ? this.NAME_CFG.M_NAME : this.NAME_CFG.F_NAME;

    if (start !== undefined || end !== undefined) {
      const reg = new RegExp(`^${start ?? ""}.*${end ?? ""}$`, "ig");
      const arr: arrNum = [];

      listOfNames.forEach((value, index) => {
        if (reg.test(value)) {
          arr.push(index);
        }
      });

      const index = Math.floor(Math.random() * (arr.length - 1));

      arr.length > 0 ? "" : console.log(`ERROR: NO MATCH FOUND`);
      return arr.length > 0 ? listOfNames[arr[index]] : "";
    }
    return listOfNames[this.rnd(listOfNames)];
  }
  protected createLastname(start: strUnd, end: strUnd): string {
    if (start !== undefined || end !== undefined) {
      const reg = new RegExp(`^${start ?? ""}.*${end ?? ""}$`, "ig");
      const arr: arrNum = [];
      this.NAME_CFG.LAST_NAME.forEach((value, index) => {
        if (reg.test(value)) {
          arr.push(index);
        }
      });
      const index = Math.floor(Math.random() * (arr.length - 1));
      arr.length > 0 ? "" : console.log(`ERROR: NO MATCH FOUND`);
      return arr.length > 0 ? this.NAME_CFG.LAST_NAME[arr[index]] : "";
    }
    return this.NAME_CFG.LAST_NAME[this.rnd(this.NAME_CFG.LAST_NAME)];
  }
  protected createGender(): string {
    const rnd = Math.round(Math.random());
    return rnd == 0 ? this.MALE : this.FEMALE;
  }
  // animal
  protected createAnimalName(): string {
    const index = Math.floor(Math.random() * (animals.length - 1));
    return animals[index];
  }
  // color
  private rgb(): I_Color_RGB {
    const rgb = {
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
    };
    return rgb;
  }
  private hex(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
  }
  protected createColor(format: string): number[] | undefined | string {
    switch (format.toUpperCase()) {
      case "RGB":
        const rgb = this.rgb();
        return [rgb.r, rgb.g, rgb.b];
      case "RGBA":
        const rgba = this.rgb();
        const a = Math.random().toFixed(2) as string;
        return [rgba.r, rgba.g, rgba.b, parseFloat(a)];
      case "HEX":
        return this.hex();
      default:
        break;
    }
  }
  // phone
  protected createNumberWithFormat(format: string): string {
    let result: string = "";
    for (let i = 0; i < format.length; i++) {
      if (format[i] === "#") {
        result += this.numRnd(0, 9);
        continue;
      }
      result += format[i];
    }
    return result;
  }
}

class Name extends Randomly {
  constructor() {
    super();
  }
  /**
   * @param data - contains F_NAME, M_NAME, L_NAME
   * @F_Name array of female names
   * @M_Name array of male names
   * @L_Name array of last names
   */
  public config(data: I_NAME_CFG_U): void {
    this.NAME_CFG.F_NAME = data.F_NAME ?? f;
    this.NAME_CFG.M_NAME = data.M_NAME ?? m;
    this.NAME_CFG.LAST_NAME = data.LAST_NAME ?? l;
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
  public fName(data?: I_Name_Fname): string {
    const _start: strUnd = data?.start ?? undefined;
    const _end: strUnd = data?.end ?? undefined;
    const _gender: strUnd =
      data?.gender !== undefined
        ? data?.gender.toUpperCase()
        : this.createGender();
    const _name: strUnd =
      data?.name !== undefined
        ? data.name
        : this.createName(_gender, _start, _end);
    return _name.toLowerCase();
  }
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
  public lName(data?: I_Name_Lname): string {
    const _start: strUnd = data?.start ?? undefined;
    const _end: strUnd = data?.end ?? undefined;
    const _name: strUnd =
      data?.name !== undefined ? data.name : this.createLastname(_start, _end);
    return _name.toLowerCase();
  }
  /**
   *
   * @param gender - "male" or "female"
   * @returns string
   */
  public prefix(gender?: string): string {
    const result: string =
      gender !== undefined
        ? gender === this.MALE
          ? "Mr."
          : "Ms."
        : this.createGender() === this.MALE
        ? "Mr."
        : "Ms.";

    return result;
  }
}

class Animal extends Randomly {
  constructor() {
    super();
  }
  /**
   *
   * @returns string
   */
  public kind(): string {
    return this.createAnimalName();
  }
}

class Color extends Randomly {
  constructor() {
    super();
  }
  /**
   *
   * @param format
   * @type {?string}
   * @returns number[] | undefined | string
   */
  public color(format?: string) {
    return format !== undefined
      ? this.createColor(format)
      : this.createColor("RGB");
  }
}

class Phone extends Randomly {
  constructor() {
    super();
  }
  /**
   *
   * @param format
   * @type {?string}
   * @returns string
   */
  public phone(format?: string): string {
    return format !== undefined
      ? this.createNumberWithFormat(format)
      : this.createNumberWithFormat(this.PHONE_DEFAULT);
  }
}

class Lorem extends Randomly {
  constructor() {
    super();
  }
  /**
   *
   * @param data \{WPS?: {min?: number, max?: number}, SPP?: {min?: number, max?: number}}
   */
  public config(data: I_Lorem_Config): void {
    this.LOREM_CFG.WordsPerSentence.min =
      data.WPS?.min ?? this.LOREM_CFG.WordsPerSentence.min;
    this.LOREM_CFG.WordsPerSentence.max =
      data.WPS?.max ?? this.LOREM_CFG.WordsPerSentence.max;
    this.LOREM_CFG.sentencesPerParagraph.min =
      data.SPP?.min ?? this.LOREM_CFG.sentencesPerParagraph.min;
    this.LOREM_CFG.sentencesPerParagraph.max =
      data.SPP?.max ?? this.LOREM_CFG.sentencesPerParagraph.max;
  }
  private method1(length: number): string {
    let _result = "";
    let _start: number = this.numRnd(0, words.length);
    const _end = _start + length;
    while (_start < _end) {
      _result += `${words[_start]} `;
      _start++;
    }
    return _result.slice(0, -1) + ".";
  }
  private method2(length: number): string {
    let _result: string = "";
    let i: number = 0;
    while (i < length) {
      _result += `${words[this.rnd(words)]} `;
      i++;
    }
    return _result.slice(0, -1) + ".";
  }
  private lorem(words: number): string {
    return words > this.WORDS_LENGTH
      ? this.method2(words)
      : this.method1(words);
  }
  /**
   *
   * @param sentences
   * @returns string
   */
  public loremSentences(sentences: number): string {
    let _result: string = "";
    let _i: number = 0;
    let _end: number = this.numRnd(
      this.LOREM_CFG.WordsPerSentence.min,
      this.LOREM_CFG.WordsPerSentence.max
    );
    while (_i < sentences) {
      _result += this.lorem(_end) + " ";
      _i++;
    }
    return _result;
  }
  /**
   *
   * @param paragraphs
   * @returns string
   */
  public loremParagraphs(paragraphs: number): string {
    let _result: string = "";
    let _i: number = 0;
    let _end: number = this.numRnd(
      this.LOREM_CFG.sentencesPerParagraph.min,
      this.LOREM_CFG.sentencesPerParagraph.max
    );
    while (_i < paragraphs) {
      _result += this.loremSentences(_end);
      _i++;
    }
    return _result;
  }
}

class CreditCard extends Name {
  private DEFAULT: I_Card_Default = {
    cvvLength: 3,
  };
  private readonly VISA_START: string = "4";
  private readonly AMEX_START: arrStr = ["34", "37"];
  private readonly MASTER_START: arrStr = ["51", "52", "53", "54", "55"];
  constructor(options?: I_Card_Default) {
    super();
    this.DEFAULT.cvvLength = options?.cvvLength ?? 3;
    this.DEFAULT.cvvLength = Math.floor(this.DEFAULT.cvvLength);
  }
  private creditNumber(type: string): number {
    let result: string = type;
    while (result.length < 15) {
      const rnd = this.numRnd(0, 9);
      result += rnd.toString();
    }
    const checksum = this.isValid(result);
    result += checksum.isValid ? "0" : checksum.checksum;
    return parseInt(result);
  }
  private holder(): string {
    return `${this.fName({})} ${this.lName({})}`;
  }
  private expire(): string {
    const d = Math.floor(Math.random() * 30) + 1;
    const y: string = (
      this.DATE.getFullYear() + Math.floor(Math.random() * 5)
    ).toString();
    return `${d}/${y[2]}${y[3]}`;
  }
  private cvv(length: number = this.DEFAULT.cvvLength): number {
    const min = 10 ** (length - 1),
      max = 10 ** length - 1;
    return this.numRnd(min, max);
  }
  /**
   *
   * @returns object
   */
  public visaCard(): I_Card_Visa {
    return {
      creditNumber: this.creditNumber(this.VISA_START),
      cvv: this.cvv(),
      holder: this.holder(),
      expire: this.expire(),
    };
  }
  /**
   *
   * @returns object
   */
  public masterCard(): I_Card_Visa {
    return {
      creditNumber: this.creditNumber(
        this.MASTER_START[this.numRnd(0, this.MASTER_START.length)]
      ),
      cvv: this.cvv(),
      holder: this.holder(),
      expire: this.expire(),
    };
  }
  /**
   *
   * @returns object
   */
  public amexCard(): I_Card_Visa {
    return {
      creditNumber: this.creditNumber(
        this.AMEX_START[this.numRnd(0, this.AMEX_START.length)]
      ),
      cvv: this.cvv(),
      holder: this.holder(),
      expire: this.expire(),
    };
  }
  // luhn algorithm
  /**
   * @param creaditCardNumber
   * @type {!string}
   * @returns object
   */
  public isValid(creaditCardNumber: string): I_Card_Visa_Valid {
    const result: arrStr = [];
    const length = creaditCardNumber.length;
    let final: number = 0;
    let i = 0;
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
        result[i] = (
          parseInt(result[i][0]) + parseInt(result[i][1])
        ).toString();
      }
      final += parseInt(result[i]);
      i++;
    }

    return final % 10 === 0
      ? { isValid: true, checksum: undefined }
      : { isValid: false, checksum: (10 - (final % 10)).toString() };
  }
}

class Net extends Name {
  private readonly provider: arrStr = [
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
  constructor() {
    super();
  }
  // https://stackoverflow.com/questions/41914224/email-generator-javascript
  private emailMethods(
    num: number,
    fn: string,
    ln: string,
    company: string
  ): string {
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
  }
  private classTypeNum(classType: string): string {
    switch (classType.toUpperCase()) {
      case "A":
        return `${this.numRnd(1, 127)}`;
      case "B":
        return `${this.numRnd(128, 191)}`;
      case "C":
        return `${this.numRnd(192, 223)}`;
      case "D":
        return `${this.numRnd(224, 239)}`;
      case "E":
        return `${this.numRnd(240, 255)}`;
      default:
        return `ERROR: WRONG CLASS`;
    }
  }
  /**
   *
   * @param data \{firstName?: string; lastName?: string; company?: string;}
   * @returns string
   */
  public email(data?: I_Net_Email): string {
    const firstName: strUnd = data?.firstName ?? this.fName();
    const lastName: strUnd = data?.lastName ?? this.lName();
    const company: strUnd =
      data?.company ?? this.provider[this.rnd(this.provider)];
    return this.emailMethods(this.numRnd(1, 14), firstName, lastName, company);
  }
  /**
   *
   * @param classType - A,B,C,D,E
   * @type {?string}
   * @returns string
   */
  public ipv4(classType?: string): string {
    return classType !== undefined
      ? `${this.classTypeNum(classType)}.${this.numRnd(0, 255)}.${this.numRnd(
          0,
          255
        )}.${this.numRnd(1, 255)}`
      : `${this.numRnd(0, 255)}.${this.numRnd(0, 255)}.${this.numRnd(
          0,
          255
        )}.${this.numRnd(0, 255)}`;
  }

  /**
   * 1487 top-level domains
   * @returns string
   */
  public domain(): string {
    return domain_arr[this.rnd(domain_arr)].toLowerCase();
  }
}

class Country extends Randomly {
  constructor() {
    super();
  }
  public country(): string {
    return country_arr[this.rnd(country_arr)];
  }
}

class Number extends Randomly {
  private readonly DEFAULTS = {
    min: 1,
    max: 1000,
    int: "INT",
    float: "FLOAT",
  };
  constructor() {
    super();
  }
  /**
   *
   * @param data
   * @type {min?: number = 1, max?: number = 1000, decimal?: number = 2 }
   * @returns number
   */
  public float(data?: I_Number_Float): number {
    const _min: number = data?.min ?? this.DEFAULTS.min;
    const _max: number = data?.max ?? this.DEFAULTS.max;
    const _decimal: number = data?.decimal ?? 2;
    return parseFloat((Math.random() * (_max - _min) + _min).toFixed(_decimal));
  }
  /**
   *
   * @param data
   * @type {min?: number = 1, max?: number = 1000}
   * @returns number
   */
  public int(data?: I_Number_Int): number {
    const _min: number = data?.min ?? this.DEFAULTS.min;
    const _max: number = data?.max ?? this.DEFAULTS.max;
    return this.numRnd(_min, _max);
  }
  /**
   *
   * @param data
   * @type {min?: number = 1, max?: number = 1000,decimal?: number; type: string; length: number;}
   * @returns number
   */
  public array(data: I_Number_Array): number[] {
    const arr: number[] = [];
    const type = data?.type.toUpperCase();
    switch (type) {
      case this.DEFAULTS.int:
        for (let i = 0; i < data.length; i++) {
          arr[i] = this.int({ min: data.min, max: data.max });
        }
        break;
      case this.DEFAULTS.float:
        for (let i = 0; i < data.length; i++) {
          arr[i] = this.float({
            min: data.min,
            max: data.max,
            decimal: data.decimal,
          });
        }
        break;
    }
    return arr;
  }
}

class Rdate extends Randomly {
  constructor() {
    super();
  }
  /**
   *
   * @returns string
   */
  public day(): string {
    return this.DAYS[this.rnd(this.DAYS)];
  }
  /**
   *
   * @returns string
   */
  public month(): string {
    return this.MONTHS[this.rnd(this.MONTHS)];
  }
}

const modnarjs = {
  name: new Name(),
  animal: new Animal(),
  color: new Color(),
  phone: new Phone(),
  card: new CreditCard(),
  net: new Net(),
  country: new Country(),
  number: new Number(),
  lorem: new Lorem(),
  date: new Rdate(),
};

export = modnarjs;
