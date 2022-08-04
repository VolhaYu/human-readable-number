module.exports = function toReadable (number) {

const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const ten = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

if(number === 0) {
    return 'zero';
}
if(number < 10) {
    return units[number];
}
if(number >= 10 && number < 20) {
    return ten[number % 10];
}
if(number >= 20 && number < 100) {
    if(number % 10 === 0) return tens[number / 10];
    else return tens[Math.trunc(number / 10)] + ' ' + units[number % 10];
}
if(number >= 100 && number < 1000) {
    if((number % 100) === 0) return units[number / 100] + ' hundred';
    else if(Math.trunc(number % 100 / 10) === 1) return (units[Math.trunc(number / 100)] + ' hundred ' + ten[number % 10]).trim();
    else if(Math.trunc(number % 100 / 10) === 0)  return (units[Math.trunc(number / 100)] + ' hundred ' + units[number % 10]).trim();
    else return (units[Math.trunc(number / 100)] + ' hundred ' + tens[Math.trunc(number % 100 / 10)] + ' ' + units[number % 10]).trim();
} 


}
