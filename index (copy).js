function generateMessage(name,age,city) {
  const message = `Olá meu nome é ${name}, tenho ${age} anos e moro em ${city}.`;
  return message;
}
const personName= "Francyene";
const personAge = "27";
const personCity = "Serra/ES";

const formattedMessage = generateMessage(personName,personAge, personCity);

console.log(formattedMessage);