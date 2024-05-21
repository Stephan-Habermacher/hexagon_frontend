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
