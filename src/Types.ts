export interface IProject {
  customer: String;
  name: String;
  id: String;
  languages: { isGerman: Boolean; isFrench: Boolean; isItalian: Boolean };
  quantities: { german: Number; french: Number; italian: Number };
  package: {
    isOuterenvelope: Boolean;
    isLetter: Boolean;
    isFlyer: Boolean;
    isBooklet: Boolean;
    isCards: Boolean;
  };
  lettershopId: String;
  shippingProvider: { isPost: Boolean; isQuickmail: Boolean };
  shippingDate: Number;
}
