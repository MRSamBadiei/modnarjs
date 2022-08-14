type arrStr = string[];
type arrNum = number[];
type strUnd = string | undefined;
// Name
interface I_NAME_CFG {
  F_NAME: string[];
  M_NAME: string[];
  LAST_NAME: string[];
}

interface I_NAME_CFG_U {
  F_NAME?: string[];
  M_NAME?: string[];
  LAST_NAME?: string[];
}

interface I_Name_Fname {
  name?: string;
  gender?: string;
  start?: string;
  end?: string;
}

interface I_Name_Lname {
  name?: string;
  start?: string;
  end?: string;
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
  checksum: string | undefined;
}

// Net
interface I_Net_Email {
  firstName?: string;
  lastName?: string;
  company?: string;
  useSpecialChar?: boolean;
}

// number
interface I_Number_Float {
  min?: number;
  max?: number;
  decimal?: number;
}

interface I_Number_Int {
  min?: number;
  max?: number;
}

interface I_Number_Array {
  min?: number;
  max?: number;
  decimal?: number;
  type: string;
  length: number;
}

// Lorem
interface I_Lorem_Config {
  WPS?: {
    min?: number;
    max?: number;
  };
  SPP?: {
    min?: number;
    max?: number;
  };
}

export {
  I_Color_RGB,
  I_Card_Visa,
  I_NAME_CFG,
  I_NAME_CFG_U,
  I_Card_Visa_Valid,
  I_Number_Array,
  I_Number_Float,
  I_Number_Int,
  I_Card_Default,
  I_Name_Lname,
  I_Name_Fname,
  I_Net_Email,
  I_Lorem_Config,
  strUnd,
  arrNum,
  arrStr,
};
