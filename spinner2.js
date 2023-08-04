
// OLDER CODE FROM SPINNER1
// setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 100);
  
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 300);
  
//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 500);
  
//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\   ');
//   }, 700);
  
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 900);
  
//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 1100);
  
//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\   ');
//   }, 1300);

//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 1500);
  
// SPINNER II REFRACTOR
const spinnerStick = ['|', '/', '-', '\\'];
let index = 0;

const animatedSpinner = () => {
  process.stdout.write(`\r${spinnerStick[index]} `);
  index = (index + 1) % spinnerStick.length;
  setTimeout(animatedSpinner, 200);

};

animatedSpinner();
  
