export interface IProject extends IProjectInputs {
  id: string;
}

export interface IProjectInputs {
  customer: string;
  name: string;
  languages: { isGerman: boolean; isFrench: boolean; isItalian: boolean };
  quantities: { german: number; french: number; italian: number };
  package: {
    isOuterenvelope: boolean;
    isLetter: boolean;
    isFlyer: boolean;
    isCards: boolean;
  };
  lettershopId: string;
  shippingProvider: { isPost: boolean; isQuickmail: boolean };
  shippingDate: string;
}

export interface ILettershop {
  id: string;
  lettershopName: string;
  lettershopNameShort: string;
  lettershopAdress: {
    streetName: string;
    streetNumber: string;
    country: string;
    zipCode: number;
    city: string;
  };
}

export interface IOuterenvelope {
  id: string;
  format: string;
  windowposition: string;
  windowsize: string;
  closure: string;
  paperweight: string;
  paper: string;
  paperlabel: string;
  preprint: string;
  postprint: string;
  price: number;
}

export interface IPricelistOuterenvelopes {
  supplierId: string;
  product: string;
  print: string;
  sortchange: number;
  price: { threshold: number; price: number }[];
}
