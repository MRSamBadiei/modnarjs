type arrStr = string[];
type arrNum = number[];
type strUnd = string | undefined;

// Name
interface I_Name_Fname {
  name?: strUnd;
  gender?: strUnd;
  start?: strUnd;
  end?: strUnd;
}

interface I_Name_Lname {
  name?: strUnd;
  start?: strUnd;
  end?: strUnd;
}

interface I_Name_Prefix {
  gender?: strUnd;
}

// Colors
interface I_Color_Format {
  format?: string;
}

interface I_Color_RGB {
  r: number;
  g: number;
  b: number;
}

// Phones

interface I_phone_fromat {
  format?: string;
}

// Cards
interface I_Card_Default {
  cvvLength: number;
}

interface I_Card_Visa {
  creditNumber: number;
  cvv: number;
  holder: string;
  expire: string;
}

interface I_Card_Visa_Valid {
  isValid: boolean;
  needToBeValid: string | undefined;
}

export {
  I_Color_Format,
  I_Color_RGB,
  I_Card_Visa,
  I_Card_Visa_Valid,
  I_Card_Default,
  I_phone_fromat,
  I_Name_Prefix,
  I_Name_Lname,
  I_Name_Fname,
  strUnd,
  arrNum,
  arrStr,
};

