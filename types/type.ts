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

// Colors
interface I_Color_RGB {
  r: number;
  g: number;
  b: number;
}

// Phones

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

// Net
interface I_Net_Email {
  firstName?: string;
  lastName?: string;
  company?: string;
  useSpecialChar?: boolean;
}

export {
  I_Color_RGB,
  I_Card_Visa,
  I_Card_Visa_Valid,
  I_Card_Default,
  I_Name_Lname,
  I_Name_Fname,
  I_Net_Email,
  strUnd,
  arrNum,
  arrStr,
};
