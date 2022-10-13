import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoGenerator from './project.js';

// UI Logic

const dinoGenerator = new DinoGenerator();

const button = document.getElementById('button');
button.addEventListener("click", dinoGenerator.getDino);












// function getDino() {
//   let promise = DinoIpsum.getDino();
//   promise.then(function(dinoDataArray) {
//     printElements(dinoDataArray);
//   },function(errorArray) {
//     printError(errorArray);
//   });
// }

// // User Interface Logic 
// function printElements() {
//   document.getElementById('result').innerText = this.response;
// }

// function printError(error) {
//   document.getElementById('result').innerText = `There was an error accessing the dino of the day ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
// }

// function handleFormSubmission(event) {
//   event.preventDefault();
//   const dinoResult = new DinoIpsum();
//   document.getElementById('result').innerHTML = dinoResult;
// }
