const postProjectBody = {
  customer: "PFO",
  name: "HM 01/24.01",
  id: "1",
  languages: { isGerman: true, isFrench: true, isItalian: true },
  quantities: { german: 60000, french: 20000, italian: 10000 },
  package: {
    isOuterenvelope: true,
    isLetter: true,
    isFlyer: true,
    isBooklet: false,
    isCards: false,
  },
  lettershopId: "M+C",
  shippingProvider: { isPost: true, isQuickmail: true },
  shippingDate: 1715356226785,
};

async function postProject() {
  fetch("http://localhost:3000/project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postProjectBody),
  });
  console.log("Hallo Liam");
}

export default postProject;
