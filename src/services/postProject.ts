const postProjectBody = {
  id: "4",
  customer: "PFO",
  name: "HM 02/24.01",
  languages: { isGerman: true, isFrench: true, isItalian: true },
  quantities: { german: 60000, french: 20000, italian: 10000 },
  package: {
    isOuterenvelope: true,
    isLetter: true,
    isFlyer: true,
    isCards: true,
  },
  lettershopId: "1",
  shippingProvider: { isPost: true, isQuickmail: true },
  shippingDate: "2024-06-01",
};

async function postProject() {
  fetch("http://localhost:3000/project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postProjectBody),
  });
}

export default postProject;
