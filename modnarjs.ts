import { m, f, l } from "./src/names/name";
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
} from "./types/type";

class Randomly {
  protected readonly MALE: string = "MALE";
  protected readonly FEMALE: string = "FEMALE";
  protected readonly PHONE_DEFAULT: string = "+1-###-555-####";
  protected readonly DATE: Date = new Date();
  // DEFAULT FUNCS
  // * rnd random array index
  private rnd(arr: arrStr): number {
    return Math.floor(Math.random() * (arr.length - 1));
  }
  // rnd number
  protected numRnd(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
  // name
  protected createName(gender: string, start: strUnd, end: strUnd): string {
    const listOfNames: arrStr = gender === this.MALE ? m : f;
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
    } else {
      const index =
        gender === this.MALE
          ? Math.floor(Math.random() * (m.length - 1))
          : Math.floor(Math.random() * (f.length - 1));
      return listOfNames[index];
    }
  }
  protected createLastname(start: strUnd, end: strUnd): string {
    if (start !== undefined || end !== undefined) {
      const reg = new RegExp(`^${start ?? ""}.*${end ?? ""}$`, "ig");
      const arr: arrNum = [];
      l.forEach((value, index) => {
        if (reg.test(value)) {
          arr.push(index);
        }
      });
      const index = Math.floor(Math.random() * (arr.length - 1));
      arr.length > 0 ? "" : console.log(`ERROR: NO MATCH FOUND`);
      return arr.length > 0 ? l[arr[index]] : "";
    } else {
      const index = Math.floor(Math.random() * (l.length - 1));
      return l[index];
    }
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
  protected createPhone(format: string): string {
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

class Name extends Randomly {
  constructor() {
    super();
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
      data?.gender !== undefined ? data?.gender : this.createGender();
    const _name: strUnd =
      data?.name !== undefined
        ? data.name
        : this.createName(_gender, _start, _end);
    return _name;
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
    return _name;
  }
  /**
   *
   * @param gender
   * @type {?string}
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
      ? this.createPhone(format)
      : this.createPhone(this.PHONE_DEFAULT);
  }
}

class Sentence extends Randomly {
  constructor() {
    super();
  }
  // test
  public simple(): string {
    //return `${this.subjectPronouns()} ${this.verb()} icrecream`;
    return "this is not working yet :)";
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
    result += checksum.isValid ? "0" : checksum.needToBeValid;
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
      ? { isValid: true, needToBeValid: undefined }
      : { isValid: false, needToBeValid: (10 - (final % 10)).toString() };
  }
}

const name = new Name();
const animal = new Animal();
const color = new Color();
const phone = new Phone();
//const sentence = new Sentence();
const card = new CreditCard();

export { name, animal, color, phone, card };
